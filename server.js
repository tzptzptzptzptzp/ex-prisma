const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// ポート番号の定義
const PORT = 8000;

app.use(express.json());

app.get("/", async (req, res) => {
  const posts = await prisma.posts.findMany();
  return res.json(posts);
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await prisma.posts.findUnique({
    where: {
      id: Number(id),
    },
  });
  return res.json(post);
});

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

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, body } = req.body;
  const post = await prisma.posts.update({
    where: {
      id: Number(id),
    },
    data: {
      title: title,
      body: body,
    },
  });
  return res.json(post);
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await prisma.posts.delete({
    where: {
      id: Number(id),
    },
  });
  return res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
