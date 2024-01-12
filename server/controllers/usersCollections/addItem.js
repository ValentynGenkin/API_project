import { APIkeyControl } from '../../util/APIKeyControl.js';
import { DBModelImport } from '../../util/DBModelImport.js';

export const addItem = async (req, res) => {
  try {
    const apiKey = req.headers.authorization?.split(' ')[1];

    const { ...data } = req.body;

    const endpoint = req.params.endpoint;

    if (!apiKey) {
      return res.status(401).json({
        msg: 'API key is missing',
      });
    }

    const userData = await APIkeyControl(apiKey);

    if (userData.success === true && userData.user.endpointName === endpoint) {
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
