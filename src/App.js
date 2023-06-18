import "./App.css";
import React from "react";
import FilterTags from "./Components/FilterTags";
import JobCard from "./Components/JobCard";
import List from "./List";

function App() {
  const [rows, setRows] = React.useState(List);
  const [filter, setFilter] = React.useState(List);
  const [selectedSkill, setSelectedSkill] = React.useState([]);

  const handleClick = (e) => {
    if (!selectedSkill.includes(e.target.value)) {
      setSelectedSkill((prev) => [...prev, e.target.value]);
    }
  };

  const filterData = () => {
    setFilter(
      rows.filter((obj) =>
        selectedSkill.every((filter) => obj.skill.includes(filter))
      )
    );
  };

  const clearFilter = () => {
    setSelectedSkill([]);
  };

  const removeElement = (filter) => {
    const arr = selectedSkill;
    const index = arr.indexOf(filter);
    arr.splice(index, 1);
    setSelectedSkill(arr);
    filterData();
  };

  React.useEffect(() => {
    filterData();
    console.log(selectedSkill);
  }, [selectedSkill]);

  return (
    <div className="App" >
      <div className="header"></div>
      <div className="container content">
        <FilterTags
          selectedSkill={selectedSkill}
          clearFilter={clearFilter}
          removeElement={removeElement}
        />
        <JobCard filter={filter} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
