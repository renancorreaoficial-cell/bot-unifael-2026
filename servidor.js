require("./whatsapp") // <- isso inicia o bot

const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Bot Unifael está online 🚀")
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT)
})