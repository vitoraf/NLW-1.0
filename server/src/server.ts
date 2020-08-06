//importação do plugin express
import express from "express";
import cors from 'cors';
import routes from './routes';


//declaração da variavel app(que é a aplicação principal de onde sairão todas as requisições) como uma função express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//Métodos HTTP:
//GET - buscar uma informação
//POST - criar informação no backend
//PUT - atualizar informação existente
//DELETE = deletar uma informação existente


//Parametros:
//Corpo (request body) - dados para criação e atualização de registro
//Route Params - indentificar qual recurso na rota sera atualizado ou deletado
//Query Params - Listagem de dados, paginação, filtros, ordenação

//teste de requisição com a url /users



//declaração da variável app com o método listen que será responsável por "ouvir" todas as requisições http com a porta 3333
app.listen(3333);

