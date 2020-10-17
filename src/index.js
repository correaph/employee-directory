import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var employeeList;

if (!localStorage.getItem("employeeList")) {
  employeeList = [
    { firstName: "Jhon", lastName: "Snow", department: "Marketing", title: "Manager" },
    { firstName: "Peter", lastName: "Pan", department: "Sales", title: "Sales Manager" },
    { firstName: "Aria", lastName: "Stark", department: "Accounts Payable", title: "Manager" },
    { firstName: "David", lastName: "Benner", department: "Sales", title: "Vendor" },
    { firstName: "Donald", lastName: "Duck", department: "IT", title: "Java Developer" },
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
