const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers")

const dburl = "mongodb+srv://";
const opt = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
mongoose.connect(dburl,opt).then(()=>console.log("Conectou"))
.catch((erro)=>console.error(`Não conectou -> ${erro}`));

const server = new ApolloServer({typeDefs,resolvers});

server.listen()
.then(({url})=>console.log(`Servidor online ${url}`))
.catch((erro)=>console.error(`Falha no servidor ${erro}`))