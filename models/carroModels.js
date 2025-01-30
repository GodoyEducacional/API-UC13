let carros2025 = [
  {
    nome: "Ferrari",
    sigla: "FER",
    velocidadeMaxima: 340,
    potencia: 800,
    consumo: 5.5,
  },
  {
    nome: "Lamborghini",
    sigla: "LAM",
    velocidadeMaxima: 355,
    potencia: 770,
    consumo: 6.2,
  },
];

// Função que retorna todos os carros no Array
export const getAllCarros = () => carros2025;

// Função que retorna um carro específico pela identificador (Sigla)
export const getCarroBySigla = (sigla) => {
  return carros2025.find((carro) => carro.sigla === sigla);
};

// Função que adiciona um novo carro ao array
export const createCarro = (novoCarro) => {
  carros2025.push(novoCarro); // Adiciona o novo carro ao final da lista
  return novoCarro;
};

// Função que atualiza as informações de um carro existente, com base na sigla
export const updateCarro = (sigla, dadosAtualizados) => {
  // Busca o índice do carro no array
  const carroIndex = carros2025.findIndex((carro) => carro.sigla === sigla);
  if (carroIndex === -1) return null; // Se não encontrar carro retorna Null
  // Atualiza o carro com as informações fornecidas
  carros2025[carroIndex] = { ...carros2025[carroIndex], ...dadosAtualizados };
  return carros2025[carroIndex];
};

// Função que remove um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
  // Busca o índice do carro no array usando a sigla
  const carroIndex = carros2025.findIndex((carro) => carro.sigla === sigla);
  if (carroIndex === -1) return null;
  // Remove o carro da lista e retorna o carro removido
  const [carroRemovido] = carros2025.splice(carroIndex, 1);
  return carroRemovido;
};