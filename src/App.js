import React from 'react';
import './App.css';

function App({ employeeList }) {
  const employeeListTable = employeeList.map(employee => (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.department}</td>
      <td>{employee.title}</td>
    </tr>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
        <table className="table table-sm table-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Title</th>
          </tr>
          {employeeListTable}
        </table>

      </header>
    </div>
  );
}

export default App;
