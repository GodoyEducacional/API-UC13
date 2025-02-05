import express from "express";

// Importa as rotas
import carroRoutes from "./routes/carroRoutes.js";

// Importar as rotas de usuário
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();

// Permite o Express ler .JSON
app.use(express.json());

// Chama as rotas de carros (Esturutra completa do código)
app.use("/carros", carroRoutes);

// Chama as rotas de usuario
app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
