import { useState } from 'react';
export const TaskCreator = () => {
    const [ newTaskName, setNewTaskName ] = useState()
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("tasks", newTaskName);
      setNewTaskName("")
    }
    return (
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Write a new task!"
          onChange={(e) => setNewTaskName(e.target.value)}
          value={newTaskName}
          />
          <button>Save task</button>
       </form>
    )
}