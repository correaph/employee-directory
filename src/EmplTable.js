import React from 'react';

export default function EmplTable(props) {
    const employeeListTable = props.employeeList.map(employee => (
        <tr key={employee.id} id={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.department}</td>
            <td>{employee.title}</td>
        </tr>
    ));
    return (
        <div>
            <label>Order By: </label>
            <label className="radio-inline"><input onChange={props.runOrderBy} type="radio" name="optradio" id="orderById"></input>Id</label>
            <label className="radio-inline"><input onChange={props.runOrderBy} type="radio" name="optradio" id="orderByFirstName"></input>First Name </label>
            <label className="radio-inline"><input onChange={props.runOrderBy} type="radio" name="optradio" id="orderByLastName"></input> Last Name </label>
            <form className="form-inline" action="/action_page.php">
                <label htmlFor="filterByName">First and/or last name to be searched (Or part of it):</label>
                <input
                    type="text"
                    id="filterByName"
                    name="filterByName"
                    autoComplete="off"
                    value={props.filterText}
                    onChange={props.applyFilter}>
                </input>
            </form>
            <hr></hr>
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeListTable}
                </tbody>
            </table>
        </div>
    );
}