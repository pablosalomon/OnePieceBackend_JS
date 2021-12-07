import { addPersonaje, getPersonaje, getPersonajeById, updatePersonaje, deletePersonaje} from "../controladores/OPController.js"

const rutas = (app) => {
    app.route('/personaje')
        .get(getPersonaje)
        .post(addPersonaje)

    app.route('/personaje/:personajeid')
        .get(getPersonajeById)
        .put(updatePersonaje)
        .delete(deletePersonaje)
}

export default rutas;