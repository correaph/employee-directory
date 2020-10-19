import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var employeeList;

if (!localStorage.getItem("employeeList")) {
  employeeList = [
    { id: "empl-1", firstName: "Jhon", lastName: "Snow", department: "Marketing", title: "Manager" },
    { id: "empl-2", firstName: "Peter", lastName: "Pan", department: "Sales", title: "Sales Manager" },
    { id: "empl-3", firstName: "Aria", lastName: "Stark", department: "Accounts Payable", title: "Manager" },
    { id: "empl-4", firstName: "David", lastName: "Benner", department: "Sales", title: "Vendor" },
    { id: "empl-5", firstName: "Donald", lastName: "Duck", department: "IT", title: "Java Developer" },
    { id: "empl-6", firstName: "Mickey", lastName: "Mouse", department: "IT", title: "React Developer" },
    { id: "empl-7", firstName: "Laura", lastName: "Croft", department: "Finance", title: "Director" },
    { id: "empl-8", firstName: "Bruce", lastName: "Wayne", department: "Finance", title: "Manager" },
    { id: "empl-9", firstName: "Snow", lastName: "White", department: "IT", title: "Director" },
  ]
} else {
  employeeList = localStorage.getItem("employeeList");
}

ReactDOM.render(
  <React.StrictMode>
    <App employeeList={employeeList} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
