import carros2025 from "./tabelaCarros.js";

import express from "express";

import { modeloCarro, modeloAtualizacaoCarro } from "./validacao.js";

const app = express();

// Configura o Expres para entender requisições com o corpo em formato JSON
app.use(express.json());

// Define uma rota GET no caminho '/' que irá retornar a lista completa de carros
app.get("/", (requisicao, resposta) => {
  // Quando a rota dor acessada, a resposta te´ra p código de status  200(ok) e enviará a lista de carris
  resposta.status(200).send(carros2025); // Retorna lista de carros com status 200
});

app.get("/:sigla", (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase(); // Obtém a sigla e deixa Maiuscula
  const carro = carros2025.find(
    (infoCarro) => infoCarro.sigla === siglaInformada
  ); // Busca o carro pela sigla
  if (!carro) {
    // Se o carro não for encontrado retorna erro 404.
    res.status(404).send("Não existe carro com a sigla informada!");
    return;
  }
  res.status(200).send(carro); // Se encontrado retorna o carro e status 200
});

app.post("/", (req, res) => {
  const novoCarro = req.body; // Obtém o novo carro enviado no corpo da requisição
  const { error } = modeloCarro.validate(novoCarro); // Valida os dados do novo carro.
  if (error) {
    // Se houver erro de validação, retorna erro 400
    res.status(400).send(error);
    return;
  }
  carros2025.push(novoCarro); // adiciona o carro a lista de carros.
  res.status(200).send(novoCarro); // Retorna o carro adiciona com status 200
});

app.put("/:sigla", (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase();
  const carroSelecionado = carros2025.find((c) => c.sigla === siglaInformada);
  if (!carroSelecionado) {
    // Se o carro não for encontrado retorna erro 404
    res.status(404).send("Não existe um carro com a sigla informada");
    return;
  };
  // Valida os dados da requisição com o modelo da atualização:
  const { error } = modeloAtualizacaoCarro.validate(req.body);
  if (error) {
    // Se houver erro de validação retorna erro 400
    res.status(400).send(error);
    return;
  }
  const campos = Object.keys(req.body);
  for (let campo of campos) {
    carroSelecionado[campo] = req.body[campo];
  }
  res.status(200).send(carroSelecionado);
});

// define a porta do servidor
app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});

// Executa o app
// node app.js
// Pelo nodemon
// npx nodemon app.js
