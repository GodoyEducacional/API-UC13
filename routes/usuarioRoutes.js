import express from "express";
import { getUsuarios } from "../controllers/usuarioController";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rota para obter todos os usuários (Necessita de autenticação)
router.get("/", authenticate, getUsuarios);

/* Abaixo teria todas as outras rotas (Códigos) que são necesárias para uma API, 
também sendo necessário incluir no Controller (POST, PUT, DELETE),
porém na de usuário é somente um "Escopo" de como poderia ser feito. */

export default router;