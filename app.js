// Importa o modulo do Express
import express from "express";

const app = express();

// define a porta do servidor
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});

// Executa o app
// node app.js