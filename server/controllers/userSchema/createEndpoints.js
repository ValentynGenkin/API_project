import User from '../../db/models/userModel.js';
import { verifyToken } from '../../util/verifyToken.js';

export const createEndpoints = async (req, res) => {
  try {
    const token = req.cookies?.customer_access;

    const { endpointName } = req.body;

    if (!endpointName) {
      return res.status(400).json({
        success: false,
        msg: 'Missing endpoint name',
      });
    }

    if (!token) {
      return res.status(403).json({
        success: false,
        msg: 'Token not provided',
      });
    }

    const id = await verifyToken(token);

    if (!id) {
      return res.status(403).json({
        success: false,
        msg: 'Invalid or expired token',
      });
    }

    const endpointCheck = await User.findOne({ endpointName: endpointName });

    if (endpointCheck) {
      return res.status(409).json({
        success: false,
        msg: 'Provided endpoint already exist',
      });
    }

    await User.updateOne({ _id: id }, { $set: { endpointName: endpointName } });

    return res.status(200).json({
      success: true,
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
