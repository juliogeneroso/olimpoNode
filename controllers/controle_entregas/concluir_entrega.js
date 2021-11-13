const Produto = require('../../models/bd_controle_produto');

module.exports = app => {
    app.post('/registro/entregas/concluidas',(req,res)=>{
        const entrega_concluida = req.body;
        
        Produto.produto_concluido(entrega_concluida, res);
        Produto.excluir_pendentes(entrega_concluida, res);
    })
}

