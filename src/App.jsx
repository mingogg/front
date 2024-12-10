import { useState } from 'react'
import { useEffect } from 'react'
import { listarTarea, crearTarea, eliminarTarea} from './api'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [form, setForm] = useState({title: "", description: ""})
  useEffect(() => {
    fetchTasksList()
  }, [])


  const fetchTasksList = async() => {
    const {data} = await listarTarea()
    console.log(data);

    setTasks(data)
  }

const createTask = async(form) => {
  await crearTarea(form)
  fetchTasksList()
  setForm({title:"", description:""})
}

const deleteTaks = async(id) => {
  await eliminarTarea(id)
  fetchTasksList()
}


  return (
    <>
    <div className="app-container">
        <h1>TODO List</h1>
        <table className = "task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITULO</th>
              <th>DESCRIPCION</th>
              <th>ESTADO</th>
              <th>ACCION</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task) => (
                <tr key = {task["id"]}>
                  <td>{task["id"]}</td>
                  <td>{task["title"]}</td>
                  <td>{task["description"]}</td>
                  <td>{task["isdone"]}</td>
                  <td><button className='btn' onClick={(e) => {
                    e.preventDefault()
                    deleteTaks(task["id"])
                    }}>ELIMINAR</button></td>
                    </tr>
              ))
            }
          </tbody>
        </table>

        <div className="form-container">
          <form>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" value={form.title} onChange={(e) => setForm({...form, title:e.target.value})}/>
            
            <label htmlFor="description">Descripción</label>
            <input type="text" name="description" id="description" value={form.description} onChange={(e) => setForm({...form, description:e.target.value})}/>

            <button className='btn' onClick={(e) => {
              e.preventDefault()
              createTask(form)
            }}>AGREGAR</button>

            <button className='btn'>LIMPIAR</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
