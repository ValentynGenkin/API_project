import mongoose from 'mongoose';
import { APIkeyControl } from '../../util/APIKeyControl.js';
import { DBModelImport } from '../../util/DBModelImport.js';

export const getItems = async (req, res) => {
  try {
    const apiKey = req.headers.authorization?.split(' ')[1];

    if (!apiKey) {
      return res.status(401).json({
        msg: 'API key is missing',
      });
    }

    const endpoint = req.params.endpoint;

    if (!endpoint) {
      return res.status(400).json({
        msg: 'Endpoint is missing',
      });
    }

    const { id } = req.query;

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

    if (!userData.user.endpointName || !userData.user.schemaName) {
      return res.status(400).json({
        msg: 'Schema and/or endpoints not created',
      });
    }

    if (userData.success && userData.user.endpointName === endpoint) {
      const DBModel = await DBModelImport(
        userData.user.id,
        userData.user.schemaName,
      );
      const model = DBModel.default;

      const data = id ? await model.findById(id) : await model.find({});

      return res
        .status(200)
        .json(
          (data && data !== null) || (data && data.length !== 0)
            ? { data: Array.isArray(data) ? data : [data] }
            : { msg: 'Not found' },
        );
    }
  } catch (error) {
    console.error('Error fetching data', error.message);
    return res.status(500).json({
      msg: 'Internal Server Error',
    });
  }
};
