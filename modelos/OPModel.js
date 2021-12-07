import mongoose from "mongoose";

//definir el esquema de persona
const Schema = mongoose.Schema;

const PersonajeSchema = new Schema({
    nombre:{
        type: String,
        required: "Ingrese nombre"
    },
    años:{
        type: Number,
        required: "Ingrese años"
    },
    isla_continente:{
        type: String,
        required: "Ingrese isla donde nació"
    },
    personalidad:{
        type: String,
        required: "Ingrese su comportamiento"
    },
    historia:{
        type: String,
        required: "Ingrese historia"
    },
    imagen:{
        type: String,
        required: "Ingrese imagen"
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    },
})

export default PersonajeSchema