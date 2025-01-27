import Joi from "joi";

// Validação para o modelo de carro
export const modeloCarro = Joi.object({
  nome: Joi.string().min(3).required(), // nome do carro, pelo menos 3 caracteres
  sigla: Joi.string().length(3).required(), // Sigla ou medelo, 3 caracteres
  velocidadeMaxima: Joi.number().min(1).required(), // Potência minima e 1 Cv
  potencia: Joi.number().min(1).required(), // Velocidade minima de 1km/h
  consumo: Joi.number().min(0.1).required(), // Ano de fabricação
});
