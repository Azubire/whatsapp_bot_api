import express from "express";

const app = express();
const port = 8000;

app.get("/", (_req, res) => {
  res.json({
    name: "Whatsapp Boards Api",
    version: "1.0.0",
    description: "A small api to process orders through whatsapp",
    author: "Azubire Peter",
    license: "MIT",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
