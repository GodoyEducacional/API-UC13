import express from "express";
import {
  getCarros,
  getCarro,
  createCarro,
  updateCarro,
  deleteCarro,
} from "../controllers/carroController.js";

const router = express.Router();

// Rota para obter todos os carros
router.get("/", getCarros);

// Rota para obter um carro pela sigla
router.get("/:sigla", getCarro);

// Rota para criar um novo carro pela Sigla
router.post("/", createCarro);

// Rota para atualizar um carro
router.put("/:sigla", updateCarro);

// Rota para deletar um carro
router.delete("/:sigla", deleteCarro);

export default router;