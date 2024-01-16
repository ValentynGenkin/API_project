import { APIkeyControl } from '../../util/APIKeyControl.js';
import { DBModelImport } from '../../util/DBModelImport.js';

export const getAllItems = async (req, res) => {
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

      const data = await model.find({});

      return res.status(200).json({ data });
    }
  } catch (error) {
    console.error('Error fetching data', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
