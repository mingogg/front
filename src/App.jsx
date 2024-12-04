import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { crearTarea, listarTarea, eliminarTarea, actualizarTarea, estadoDeTarea, modificarTarea } from './api'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [form, setForm] = useState({title: "", description: ""})
  useEffect(() => {
    fetchTasksList()
  }, [])
  const fetchTasksList = async() => {
    const {data} = await listarTarea()
    setTasks(data)
  }
  


  return (
    <>
      <h1>TODO List</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>titulo</th>
            <th>description</th>
            <th>isdone</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task) => (
              <tr key = {task[0]}>
                <td>{task[0]}</td>
                <td>{task[1]}</td>
                <td>{task[2]}</td>
                <td>{task[3]}</td>
                <td>{task[4]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
