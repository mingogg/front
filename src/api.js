import axios from "axios"

const baseAPI = "localhost:5000"

const crearTarea = (tarea) => axios.post(baseAPI + "/crear", tarea)
const listarTarea = () => axios.get(baseAPI + "/listado")
const actualizarTarea = (tarea, id) => axios.put(baseAPI + "/tarea/" + id, tarea)
const modificarTarea = (tarea, id) => axios.put(baseAPI + "/modificar/" + id, tarea)
const eliminarTarea = (id) => axios.delete(baseAPI + "/eliminar/" + id)
const estadoDeTarea = (tarea, id) => axios.patch(baseAPI + "/estado/" + id, tarea)

export {crearTarea, listarTarea, actualizarTarea, modificarTarea, eliminarTarea, estadoDeTarea}