import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const categoryList = categories.filter((category)=>{
    return category !== 'All'
  }).map((category)=>{
    return <option key={category} value={category}>{category}</option>
  })

  const [form, setForm] = useState ({
    'text' : '',
    'category' : 'code'
  })

  function handleChange(event){
    const key = event.target.name;
    const value = event.target.value.toString();

    setForm({...form, [key]:value})
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(form);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
