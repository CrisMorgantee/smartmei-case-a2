const {  gql } = require('apollo-server');

const typeDefs = gql`
  type LocaleProps {
    cep: String!
    logradouro: String!
    complemento: String!
    bairro: String!
    localidade: String!
    uf: String!
    ibge: String!
    gia: String!
    ddd: String!
    siafi: String!
  }

  type Query {
    getLocaleByCep(cep: String!): LocaleProps
  }
`;

module.exports= typeDefs
