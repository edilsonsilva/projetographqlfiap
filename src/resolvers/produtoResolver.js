const Produto = require("../models/Produto");

const produtoResolver = {
    Query:{
        produtos(){
            return Produto.find();
        },
        produto(_,{id}){
            return Produto.findById(id);
        },
    },

    Mutation:{
        createProduto(_,{produto}){
            const novoProduto = new Produto(produto)
            return novoProduto.save();
        },
        updateProduto(_,{id,produto}){
            return Produto.findByIdAndUpdate(id,produto,{
                new:true,
            })
        },
        deleteProduto(_,{id}){
            return Produto.findByIdAndDelete(id)
        },
    },

};

module.exports = produtoResolver;