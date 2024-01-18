import { APIkeyControl } from '../../util/APIKeyControl.js';
import { DBModelImport } from '../../util/DBModelImport.js';
import { requestValidation } from '../../util/requestValidation.js';
import { verifyToken } from '../../util/verifyToken.js';

export const addItem = async (req, res) => {
  try {
    const apiKey = req.headers.authorization?.split(' ')[1];

    const { ...data } = req.body;

    const endpoint = req.params.endpoint;

    const token = req.cookies.customer_access;

    if (Object.keys(data).length === 0) {
      return res.status(400).json({
        msg: 'Please provide required inputs',
      });
    }

    const validation = requestValidation(token, apiKey, endpoint, res);

    if (!validation) return;

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

      await model.create(data);

      return res.status(200).json({
        msg: 'Data successfully created',
      });
    } else {
      return res.status(403).json({
        msg: 'Invalid API key',
      });
    }
  } catch (error) {
    console.error('Error creating data', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
