import mongoose from 'mongoose';
import { APIkeyControl } from '../../util/APIKeyControl.js';
import { DBModelImport } from '../../util/DBModelImport.js';
import { verifyToken } from '../../util/verifyToken.js';
import { checkDataForUpdate } from '../../util/checkDataForUpdate.js';

export const updateItem = async (req, res) => {
  try {
    const apiKey = req.headers.authorization?.split(' ')[1];

    const { ...data } = req.body;

    const endpoint = req.params.endpoint;

    const token = req.cookies.customer_access;

    if (Object.keys(data).length === 0) {
      return res.status(400).json({
        msg: 'Please provide at least one item input to update',
      });
    }

    if (!token) {
      return res.status(403).json({
        msg: 'Token not provided',
      });
    }

    if (!endpoint) {
      return res.status(400).json({
        msg: 'Endpoint is missing',
      });
    }

    if (!apiKey) {
      return res.status(401).json({
        msg: 'API key is missing',
      });
    }

    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        msg: 'Item ID is missing',
      });
    }

    if (id && !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'Invalid item ID',
      });
    }

    const userData = await APIkeyControl(apiKey);

    if (!userData.success) {
      return res.status(401).json({
        msg: userData.message,
      });
    }

    const tokenID = await verifyToken(token);

    if (!userData.user.endpointName || !userData.user.schemaName) {
      return res.status(400).json({
        msg: 'Schema and/or endpoints not created',
      });
    }

    if (
      userData.success &&
      userData.user.endpointName === endpoint &&
      tokenID === userData.user.id.toString()
    ) {
      const DBModel = await DBModelImport(
        userData.user.id,
        userData.user.schemaName,
      );

      const model = DBModel.default;

      const schemaFields = await model.schema.obj;

      const dataCheck = checkDataForUpdate(schemaFields, data);

      if (!dataCheck) {
        return res.status(400).json({
          msg: 'Check data for update',
          fieldsForUpdate: Object.keys(schemaFields),
        });
      }

      await model.findByIdAndUpdate(id, data);

      return res.status(200).json({
        msg: 'Data successfully updated',
      });
    } else {
      return res.status(403).json({
        msg: 'Invalid API key',
      });
    }
  } catch (error) {}
};
