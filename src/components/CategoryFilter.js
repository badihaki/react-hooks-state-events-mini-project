import React from "react";

function CategoryFilter({categories, filterButton}) {
  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((selection)=>{
        return <button key={selection} onClick={filterButton}>{selection}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
