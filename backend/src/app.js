const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 미들웨어
app.use(cors());
app.use(express.json());

// 테스트 API
app.get('/', (req, res) => {
  res.send('Express 서버 정상 실행!');
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: '안녕! Express 서버와 연결 성공!'
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});