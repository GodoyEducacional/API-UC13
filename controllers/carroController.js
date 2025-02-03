import {
    getAllCarros,
    getCarroBySigla,
    createCarro as modelCreateCarro,
    updateCarro as modelUpdateCarro,
    deleteCarro as modelDeleteCarro,
  } from "../models/carroModels.js";
  
  import {
    modeloCarro,
    modeloAtualizacaoCarro,
  } from "../validations/carroValidation.js";
  
  // Função para retornar todos os carros
  export const getCarros = (req, res) => {
    const carros = getAllCarros();
    res.status(200).json(carros);
  };
  
  // Função para retornar um carro específico com base na sigla
  export const getCarro = (req, res) => {
    const { sigla } = req.params;
    const carro = getCarroBySigla(sigla.toUpperCase());
  
    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado!" });
    }
  
    res.status(200).json(carro);
  };
  
  // Função para criar um novo carro
  export const createCarro = (req, res) => {
    const { error } = modeloCarro.validate(req.body);
  
    if (error) {
      return res.status(400).json({ mensagem: error.details[0].message });
    }
  
    const novoCarro = req.body;
    const carroCriado = modelCreateCarro(novoCarro);
    res.status(201).json(carroCriado);
  };
  
  // Função para atualizar os dados de um carro existente
  export const updateCarro = (req, res) => {
    const { sigla } = req.params;
    const { error } = modeloAtualizacaoCarro.validate(req.body);
  
    if (error) {
      return res.status(400).json({ mensagem: error.details[0].message });
    }
  
    const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body);
  
    if (!carroAtualizado) {
      return res
        .status(404)
        .json({ mensagem: "Carro não encontrado para atualização!" });
    }
  
    res.status(200).json(carroAtualizado);
  };
  
  // Função para excluir um carro existente
  export const deleteCarro = (req, res) => {
    const { sigla } = req.params;
    const carroRemovido = modelDeleteCarro(sigla.toUpperCase());
  
    if (!carroRemovido) {
      return res
        .status(404)
        .json({ mensagem: "Carro não encontrado para remoção!" });
    }
  
    res
      .status(200)
      .json({ mensagem: "Carro removido com sucesso!", carro: carroRemovido });
  };
  