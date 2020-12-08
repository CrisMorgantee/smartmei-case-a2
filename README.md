# Desafio Backend

### A2​. Criar um backend GraphQL, expondo uma query que retorne o resultado de uma API rest

> * Utilizar a api https://viacep.com.br
> * Disponibilizar uma query que retorne a consulta de um CEP específico
> * O parâmetro de entrada será o número do cep a ser consultado
> * A saí da deverá ser uma estrutura com as informações que a API do viacep já retorna para a consulta do CEP

***

## :fire: Instalação

1. Clone o repositório
```bash
git clone https://github.com/CrisMorgantee/smartmei-case-a2.git
```

2. Entre na pasta do projeto
```bash
cd smartmei-case-a2
```

3. Baixe as dependências
```bash
yarn
```
se você utiliza npm execute: `npm install`

4. Execute o script para subir o projeto
```bash
yarn dev
```
se você utiliza npm execute: `npm run dev`

Irá subir um servidor em http://localhost:`port`/ com o playground do GraphQL.

Você pode utilizar a query abaixo para a consulta:

```gql
query GET_LOCALE_BY_CEP($cep: String!) {
  getLocaleByCep(cep: $cep) {
    cep
    logradouro
    complemento
    bairro
    localidade
    uf
    ibge
    gia
    ddd
    siafi
  }
}
```
Envie em QUERY VARIABLES o cep a ser consultado:
```
{
  "cep": "01001000"  
}
```

***
##  :boom: Tecnologias e Libs utilizadas

-  [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
-  [Axios](https://github.com/axios/axios)
-  [GraphQL](https://graphql.org/)
