import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() 
{
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        date: 'Feb 5th at 2:30 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Catch up with old buddies',
        date: 'Feb 8th at 2:30 PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Go to the country pool',
        date: 'Feb 10th at 2:30 PM',
        reminder: false,
    },
    
])

  const [showAddTask, setShowAddTask]=useState(false)
  function deleteTask(id)
  {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  function toggleReminder(id)
  {
    setTasks(tasks.map((task) => task.id===id?{...task, reminder:!task.reminder}:task))
    tasks.forEach((task) => {if(task.id === id) console.log(task.reminder)})
  }

  function addTask(task)
  {
    const id = tasks.length+1
    setTasks([...tasks, {...task, id}])
  }

  function addButtonClick()
  {
    setShowAddTask(!showAddTask)
  }
  return (
    <div className="container">
      <Header onClick={addButtonClick} show={showAddTask}/>
      {showAddTask?<AddTask onAdd={addTask}/>:''}
      {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: ' No tasks'}
    </div>
  );
}



export default App;
