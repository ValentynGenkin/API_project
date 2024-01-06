import User from '../db/models/userModel';

export const APIkeyControl = async (request) => {
  try {
    if (!request.params.APIkey) {
      return {
        success: false,
        message: 'API key is missing',
      };
    }

    const user = await User.findOne({ APIkey: request.params.APIkey });

    return !user
      ? { success: false, message: 'Invalid API key' }
      : { success: true };
  } catch (error) {
    console.error('API key control error:', error);
    throw error;
  }
};
