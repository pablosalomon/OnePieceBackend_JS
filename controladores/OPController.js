import mongoose from "mongoose";
import PersonajeSchema from "../modelos/OPModel.js";


//crear objeto persona basado en el esquema
const Personaje = mongoose.model('Personaje', PersonajeSchema)

//accion para registrar nueva persona

export const addPersonaje = function (request, response){
    //creando nueva persona:
    let p = new Personaje(request.body)
    //grabar La nueva persona
    p.save(function(error, p ){
    if(error){
        response.send (error)
    }else{
        response.json (p)
    }
})
}

//accion para obtener el listado de personas
export const getPersonaje = function (request, response){
   Personaje.find({}, (error, personaje) => {
       if(error){
           response.send(error)
       }else{
           response.json(personaje)
       }
   })
}

export const getPersonajeById = function (request, response){
    Personaje.findById(request.params.personajeid, (error, personaje)=>{
        if(error){
            response.send(error)
        }else{
            response.json(personaje)
        }
    })
 }


export const updatePersonaje = function (request, response){
    Personaje.findOneAndUpdate({_id: request.params.personajeid}, request.body,
        {
            new:true
        } ,
        (error, personaje)=>{
        if(error){
            response.send(error)
        }else{
            response.json(personaje)
        }
    })
 }

 export const deletePersonaje = function (request, response){
    Personaje.remove({_id: request.params.personajeid}, request.body, (error, personaje)=>{
        if(error){
            response.send(error)
        }else{
            response.json({mensaje: "Eliminado!"})
        }
    })
 }