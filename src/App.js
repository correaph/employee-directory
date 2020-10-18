import React, { useState } from 'react';
import EmplTable from './EmplTable';

function App(props) {
  const [employeeList, setEmployeeList] = useState(props.employeeList);
  var runOrderBy = (e) => {
    var sortedList;
    if (e.target.id === "orderByFirstName") {
      sortedList = employeeList.sort((a, b) => a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0 );
    } else if (e.target.id === "orderByLastName") {
      sortedList = employeeList.sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0 );
    } else {
      sortedList = employeeList.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0 );
    }
    setEmployeeList([...sortedList]);
  };
  return (
    <div>
      <header className="App-header">
        <h1 className="text-center">Employee Directory</h1>
      </header>
      <article>
        <EmplTable employeeList={employeeList} runOrderBy={runOrderBy} />
      </article>
    </div>
  );
}

export default App;
