export const logout = async (req, res) => {
  try {
    if (req.cookies.customer_access) {
      return res.status(200).clearCookie('customer_access').json({
        success: true,
        msg: 'You have logged out successfully',
      });
    } else {
      return res.status(400).json({
        success: false,
        msg: 'You have already logged out',
      });
    }
  } catch (error) {
    console.error('Logout error', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
