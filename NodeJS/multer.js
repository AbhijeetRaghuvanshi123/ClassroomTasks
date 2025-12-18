import multer from "multer";
import express from "express";

const app = express();
const PORT= 3000;
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.end("Hello World!");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});