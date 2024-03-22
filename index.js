//importando o modulo express
const express = require('express');
const bodyParser = require('body-parser');
const app     = express();
const {contaLetra, palindromo} = require("./palavra");
const PORT = process.env.PORT || 3000;


//aplicando o bodyparser no express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Api
app.listen(PORT, () => {
    console.log("Servidor escutando na Porta:", PORT);
});

//Metodo Get
app.get("/status",(request,response)=> {
    const status = {
        "status": "Executando"
    };

    response.json(status);
});

//Metodo Post
app.post("/api/manipulacao-string",(request, response)=>{ 
    let texto = request.body.texto;
    
    if((texto.lengt != 0) && isNaN(texto)){

        let resposta = {};

        resposta["palindromo"] = palindromo(texto);
        resposta["ocorrencias_caracteres"] = contaLetra(texto);

        response.json(JSON.stringify(resposta));
    }else{
        response.json('error: string vazia ou é um numero');
    }
 });