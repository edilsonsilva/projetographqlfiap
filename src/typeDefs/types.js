const { gql } = require("apollo-server");

const types = gql `

type Produto{
    id:ID!
    nome:String,
    descricao:String,
    preco:String,
    fornecedores:Fornecedores
}
type Fornecedores{
    razaosocial:String
    cnpj:String
}
`;
module.exports = types;