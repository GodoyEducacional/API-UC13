import express from "express";

// Importa as rotas
import carroRoutes from "./routes/carroRoutes.js";

const app = express();

// Permite o Express ler .JSON
app.use(express.json());

// Chama as rotas de carros (Esturutra completa do código)
app.use("/carros", carroRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});