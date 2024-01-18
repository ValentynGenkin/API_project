export const requestValidation = (token, apiKey, endpoint, res) => {
  if (!token) {
    res.status(403).json({
      msg: 'Token not provided',
    });
    return false;
  }

  if (!endpoint) {
    res.status(400).json({
      msg: 'Endpoint is missing',
    });
    return false;
  }

  if (!apiKey) {
    res.status(401).json({
      msg: 'API key is missing',
    });
    return false;
  }

  return true;
};
