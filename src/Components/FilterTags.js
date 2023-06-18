import React from "react";

export default function FilterTags({selectedSkill,removeElement ,clearFilter}) {


  const handleRemove = (e)=> {
    removeElement(e.target.parentElement.firstChild.innerText)
  }
  


  return (
      <div className="row" style={{opacity:selectedSkill.length ?"1":'0.01'}}>
        <div className="col-12">
          <div className="filter-tags-c">
            <ul id="filter-tags-list">
              {selectedSkill.map((filter, i)=> (
                <li key={i} className="tag-filter">
                  <p>{filter}</p>
                  <span onClick={handleRemove} style={{padding:'0 10px'}}>x</span>
                  </li>
              ))}
            </ul>
            <p className="clear-tags" id="js-clear-tags" onClick={clearFilter}> 
              {''}
              Clear
            </p>
          </div>
        </div>
      </div>
  );
}
