import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { listarTarea } from './api'

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
              <tr key = {task}>
                <td>{task["id"]}</td>
                <td>{task["title"]}</td>
                <td>{task["description"]}</td>
                <td>{task["isdone"]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
