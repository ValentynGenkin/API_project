import User from '../db/models/userModel.js';

export const APIkeyControl = async (apiKey) => {
  try {
    if (!apiKey) {
      return {
        success: false,
        message: 'API key is missing',
      };
    } else {
      const user = await User.findOne({ APIkey: apiKey });

      return !user
        ? { success: false, message: 'Invalid API key' }
        : {
            success: true,
            user: {
              id: user._id,
              endpointName: user.endpointName,
              schemaName: user.schemaName,
            },
          };
    }
  } catch (error) {
    console.error('API key control error:', error);
    throw error;
  }
};
