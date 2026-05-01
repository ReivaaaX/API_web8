const express = require("express");

const app = express();
const PORT = 3000;

app.get("/hour", (req, res) => {
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
