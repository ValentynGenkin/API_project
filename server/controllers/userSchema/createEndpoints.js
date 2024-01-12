import User from '../../db/models/userModel.js';
import { verifyToken } from '../../util/verifyToken.js';

export const createEndpoints = async (req, res) => {
  try {
    const token = req.cookies?.customer_access;

    const { endpointName } = req.body;

    if (!endpointName) {
      return res.status(400).json({
        msg: 'Missing required fields',
      });
    }

    if (!token) {
      return res.status(403).json({
        msg: 'Token not provided',
      });
    }

    const id = await verifyToken(token);

    if (!id) {
      return res.status(403).json({
        msg: 'Invalid or expired token',
      });
    }

    const endpointCheck = await User.findOne({ endpointName: endpointName });

    if (endpointCheck) {
      return res.status(409).json({
        msg: 'Provided endpoint already exist',
      });
    }

    await User.updateOne({ _id: id }, { $set: { endpointName: endpointName } });

    return res.status(200).json({
      msg: 'Endpoints created successfully',
    });
  } catch (error) {
    console.error('Error creating endpoints', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
