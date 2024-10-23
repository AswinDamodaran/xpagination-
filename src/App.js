
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const employeelimit = 10;

  const idxLast = currentpage * employeelimit;
  const idxFirst = idxLast - employeelimit;
  const currentEmployee = employees.slice(idxFirst, idxLast);
  const updatePage = (newPage) => setCurrentpage(newPage);
  const totalPages = Math.ceil(employees.length / employeelimit);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setEmployees(res.data);
    } catch (e) {
      alert("failed to fetch data", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Emai</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployee.map((employee) => (
            <tr key={employee.id} >
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
      updatePage={updatePage}
      currentPage={currentpage}
      totalPages={totalPages}
       />
    </div>
  );
}

export default App;
