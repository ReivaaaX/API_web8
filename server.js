const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
  const now = new Date();

  res.json({
    data: now.toLocaleDateString(),
    hora: now.toLocaleTimeString(),
    iso: now.toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
