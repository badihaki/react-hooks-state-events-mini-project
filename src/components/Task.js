import React from "react";

function Task({text,category}) {

  function handleDeleteButton(event){
    event.target.parentNode.remove();
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteButton}>X</button>
    </div>
  );
}

export default Task;
