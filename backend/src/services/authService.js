
const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

async function signup({ username, email, password }) {
  username = username?.trim();
  email = email?.trim().toLowerCase();

  if (!username || !email || !password) {
    throw new Error('모든 항목을 입력해 주세요.');
  }

  if (username.length > 50) {
    throw new Error('아이디는 50자 이하여야 합니다.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('올바른 이메일을 입력해 주세요.');
  }

  if (typeof password !== 'string' || password.length < 8) {
    throw new Error('비밀번호는 8자 이상이어야 합니다.');
  }

  // bcrypt 입력 길이 제한을 고려
  if (Buffer.byteLength(password, 'utf8') > 72) {
    throw new Error('비밀번호가 너무 깁니다.');
  }

  const existingUser = await userRepository.findByEmail(email);

  if (existingUser) {
    throw new Error('이미 가입된 이메일입니다.');
  }

  // 비밀번호 원문 대신 해시를 저장
  const hashedPassword = await bcrypt.hash(password, 12);

  return userRepository.createUser({
    username,
    email,
    password: hashedPassword,
  });
}

async function login({ email, password }) {
  email = email?.trim().toLowerCase();

  if (!email || typeof password !== 'string' || !password) {
    throw new Error('이메일과 비밀번호를 입력해 주세요.');
  }

  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  // 응답에는 비밀번호 해시를 포함하지 않음
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

module.exports = {
  signup,
  login,
};
