import React, {useState}  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [tasks, setTasks] = useState(TASKS);

  function handleFilterButtons(event){
    //  This funct can change the selected category
    //  and update the filtered list with a little refactoring
    
    
    event.target.className='selected';
    if(selectedCategory != null){
      if(selectedCategory === event.target){
        selectedCategory.classList.remove('selected')
        setSelectedCategory(null);
      }
      else{
        selectedCategory.classList.remove('selected')
        setSelectedCategory(event.target);
      }
    }
    else{
      setSelectedCategory(event.target);
    }
  }

  const filteredTaskList = tasks.filter((indTask)=>{
    if(selectedCategory===null || selectedCategory.innerText === 'All') return true;
    else{
      return indTask.category === selectedCategory.innerText
    }
  })

  function addNewTask(task){
    setTasks([...tasks,task]);
  } 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterButton={handleFilterButtons} />
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={filteredTaskList}/>
    </div>
  );
}

export default App;
