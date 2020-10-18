import React from 'react';

export default function app(props) {
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