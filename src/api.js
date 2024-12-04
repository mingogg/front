import axios from "axios"

const baseAPI = "http://localhost:5000"

export const crearTarea = (tarea) => axios.post(baseAPI + "/crear", tarea)
export const listarTarea = () => axios.get(baseAPI + "/listado")
export const actualizarTarea = (tarea, id) => axios.put(baseAPI + "/tarea/" + id, tarea)
export const modificarTarea = (tarea, id) => axios.put(baseAPI + "/modificar/" + id, tarea)
export const eliminarTarea = (id) => axios.delete(baseAPI + "/eliminar/" + id)
export const estadoDeTarea = (tarea, id) => axios.patch(baseAPI + "/estado/" + id, tarea)