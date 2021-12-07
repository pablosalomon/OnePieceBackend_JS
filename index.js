import express from "express";
import rutas from "./rutas/rutas.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//Crear objeto Application
const app = express ()
const PUERTO = 5000

//Conexion a Mongo
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/OnePiece",
                    {
                        useNewUrlParser : true,
                        useUnifiedTopology : true
                    }
                )

//Config de Body Parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Utilizar rutas
rutas(app)

//Crear servidor de aplicacion
app.listen( PUERTO, () => {
        console.log(`Servidor ejecutando en el puerto:${PUERTO}`)
})