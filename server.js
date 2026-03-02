const express = require("express");

const app = express();

app.use(express.json());

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.status(200).send("🚀 Bot Faculdade Online - Servidor ativo");
});

// ROTA STATUS
app.get("/status", (req, res) => {
  res.json({
    status: "online",
    servidor: "Railway",
    data: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando na porta " + PORT);
});