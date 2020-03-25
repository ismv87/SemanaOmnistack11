const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/Recurso
 */

 /**
  * Método HTTP
  * 
  * get: Buscar/listar uma informacao do backend
  * POST: Criar uma informaçao no backend
  * PUT: Alterar uma informacao no backend
  * DELETE: deletar uma informaçaao no backend
  */

  /**
   * tipos de parametro
   * Query: parametros nomeados enviados na rota após o ? (Filtros, paginacão)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body  : Corpo da requisiçao, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MYSQL, SQLITE, POSTGREE, ORACLE, MICROSOFT 
    * NOSQL, MONGODB COUCH DB, ECT
    * 
    */

    /**
     * DRIVER: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333);