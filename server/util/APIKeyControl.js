import User from '../db/models/userModel';

export const APIkeyControl = async (request, response) => {
  try {
    if (!request.params.APIkey) {
      return false;
    }

    const user = await User.findOne({ APIkey: request.params.APIkey });

    return !user ? false : true;
  } catch (error) {
    console.error('API key control error:', error);
    throw error;
  }
};
