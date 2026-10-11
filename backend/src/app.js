
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express 서버 정상 실행!');
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
