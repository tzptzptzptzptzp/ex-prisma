const express = require("express");
const app = express();

// ポート番号の定義
const PORT = 8000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
