import { useState } from "react";
import BackButton from "../common/backbutton";
import employees from "../utils/employeeData";
function TableDataMap() {
  const [data, setData] = useState(employees);
  return (
    <>
      <BackButton />
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>S. No. </th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => {
            return (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default TableDataMap;
