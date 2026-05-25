const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Docker Hub + ACR!</h1><p>멀티 레지스트리 CI/CD 자동 배포 성공 🎉</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});