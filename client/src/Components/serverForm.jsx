import { useState, useEffect } from "react";
import { createEmployeeData, deleteEmployeeData, getEmployeeData, updateEmployeeData } from "../api";

function ServerForm() {
    const [form_data, setForm_data] = useState(initialState());
    const [table_data, setTable_data] = useState([]);


    useEffect( () => {
        // const res=getData();
        // console.log("res",res);
        // setTable_data(res);
       getData();
    }, [])

    function initialState() {
        return {

            name: "",
            designation: "",
            department: "",
            salary: "",
            joining_date: ""
        }
    }

    function onChangeHandler(event) {
        setForm_data({ ...form_data, [event.target.name]: event.target.value })
    }

    async function submit() {
        if(form_data.id){
            // console.log("form data",form_data)
         const res= await updateEmployeeData(form_data);
          console.log("res",res);
        }
        else{
      const res= await createEntry(form_data);
       console.log("res",res);
    
        }
        setForm_data(initialState);
      await  getData();
    }
    async function getData(){
        const res= await getEmployeeData();
        console.log("res",res)
       setTable_data(res);
    }
    async function createEntry(form_data) {
    const res= await createEmployeeData(form_data);
    console.log("res",res)
    }

    async function deleteEntry(user_id){
const res=await deleteEmployeeData(user_id)
 console.log("res",res)
getData();
    }
    return <>
        <form>
            <label for="name">Name : </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={form_data.name}
                onChange={onChangeHandler}
            />
            <br />
            <br />
            <label for="designation">Designation : </label>
            <input
                type="text"
                id="designation"
                name="designation"
                placeholder="Enter your designation"
                value={form_data.designation}
                onChange={onChangeHandler}
            />
            <br />
            <br />
            <label for="Department">Department : </label>
            <input
                type="text"
                id="department"
                name="department"
                placeholder="Enter your department"
                value={form_data.department}
                onChange={onChangeHandler}
            />
            <br />
            <br />
            <label for="salary">Salary : </label>
            <input
                type="text"
                id="salary"
                name="salary"
                placeholder="Enter your salary"
                value={form_data.salary}
                onChange={onChangeHandler}
            />
            <br />
            <br />
            <label for="joining_date">Date of Joining : </label>
            <input
                type="date"
                id="joining_date"
                name="joining_date"
                value={form_data.joining_date}
                onChange={onChangeHandler}
            />
            <br />
            <br />
            <button type="button" onClick={submit}>
                Submit
            </button>

        </form>

        <hr/>
        <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>S. No. </th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Date of Joining</th>
            <th>Delete Button</th>
            <th>Edit Button</th>
          </tr>
        </thead>
        <tbody>
         {!!table_data.length && table_data.map((item)=>{
           return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>{item.joining_date}</td>
                <td>
                    <button type="button" onClick={()=>{deleteEntry(item.id)}}>Delete</button>
                </td>
                <td>
                    <button type="button"onClick={()=>{setForm_data(item)}}>Edit</button>
                </td>

            </tr>)
        })}
                </tbody>
      </table>
    </>

}
export default ServerForm;