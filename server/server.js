
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "https://canaldetudodopietro-png.github.io"
  ]
}));

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "NEWMASTER API",
    status: "online",
    version: "1.0.0"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    service: "NEWMASTER",
    uploadLimit: "1GB"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`NEWMASTER API rodando na porta ${PORT}`);
});
