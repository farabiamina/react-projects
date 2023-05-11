import React from 'react';
import { useState }  from 'react'
import './App.css';
import Header  from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Task 1',
        isDone: false
    }
  ])
  const [showForm, setShowForm] = useState(false)
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000)+1 
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(task)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleDone = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone} : task))
    console.log(tasks)
  }
  return (
    <div className='main'>
      <div className="container">
        <Header onAdd={() => setShowForm(!showForm)} btnAdd = {showForm}/>
        {showForm && <AddTask onAdd={addTask} />}
        {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />) : (<p>No Tasks!</p>)}
      </div>
    </div>
  );
}

export default App;
