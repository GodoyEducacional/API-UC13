# API de Carros - WEBAPI

Esta é uma API em construção, que será uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto de CRUD (Create, Read, Update, Delete), que será expandido no futuro. Este é apenas o escopo inicial.

## Funcionalidades

- **GET /**: Retorna a lista completa de carros.
- **GET /:sigla**: Retorna as informações de um carro específico, identificando pela sigla.
- **POST /**: Adiciona um novo carro à lista.
- **PUT /:sigla**: Atualiza as informações de um carro específico, identificando pela sigla.
- **DELETE /:sigla**: Remove um carro específico pela sigla.

## Estrutura inicial do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados fictícios).
- **validacao.js**: Contém as validações Joi para os dados dos carros.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para construção de API REST.
- **Joi**: Biblioteca para validação de dados.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis.

#### Exemplo de resposta:

```json
[
    {
        "nome": "Ferrari",
        "sigla": "FER",
        "velocidadeMaxima": "340",
        "potencia": "800",
        "consumo": "5.5"
    },
    {
        "nome": "Lamborghini",
        "sigla": "LAM",
        "velocidadeMaxima": "355",
        "potencia": "770",
        "consumo": "6.2"
    }
]
```

## Como Rodar o Projeto

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. **Instale as dependências:**

    Navegue até o diretório do projeto e execute o comando:

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    Após a instalação das dependências, inicie o servidor:

    ```bash
    node ./app.js
    ```

4. **Acesse a API:**

    A API estará disponível em [http://localhost:3000](http://localhost:3000).

    **https://readme.so/pt/editor**