//importação do plugin express
import express from "express";


//declaração da variavel app(que é a aplicação principal de onde sairão todas as requisições) como uma função express
const app = express();

//teste de requisição com a url /users
app.get('/users', (request, response) =>{
    const users = [
        {name: 'Diego', age: 25},
        {name: 'Vini', age: 21},
    ];

    return response.json(users);
})


//declaração da variável app com o método listen que será responsável por "ouvir" todas as requisições http com a porta 3333
app.listen(3333);

