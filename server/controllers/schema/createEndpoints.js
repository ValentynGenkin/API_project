import { endpointsCreator } from '../../util/endpointsCreator.js';
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
    await endpointsCreator(endpointName, id);
  } catch (error) {
    console.error('Error creating endpoints', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
