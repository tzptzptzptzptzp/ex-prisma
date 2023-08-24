const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// ポート番号の定義
const PORT = 8000;

app.use(express.json());

app.post("/", async (req, res) => {
  const { title, body } = req.body;
  const posts = await prisma.posts.create({
    data: {
      title: title,
      body: body,
    },
  });
  return res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
