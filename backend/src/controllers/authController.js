
const authService = require('../services/authService');

async function signup(req, res) {
  try {
    const user = await authService.signup(req.body);

    res.status(201).json({
      success: true,
      message: '회원가입 성공',
      user,
    });
  } catch (error) {
    const statusCode = error.message.includes('이미 가입된 이메일')
      ? 409
      : 400;

    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const user = await authService.login(req.body);

    res.json({
      success: true,
      message: '로그인 성공',
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  signup,
  login,
};
