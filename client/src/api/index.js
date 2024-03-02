import axios from 'axios'

export const getEmployeeData = async () => {
    try {
        const response = await axios.get("http://localhost:8000/data")
        // console.log("data", data)
        return response;
    } catch (error) {
        console.log("error : ", error)
        return error;
    }
}


export const createEmployeeData = async (form_data) => {
    try {
        const response  = await axios.post("http://localhost:8000/data", {
            name: form_data.name,
            designation: form_data.designation,
            department: form_data.department,
            salary: form_data.salary,
            joining_date: form_data.joining_date
        })
        // console.log("data:  ", data)
        return response;
    } catch (error) {
        console.log("error : ", error)
        return error;
    }
}


export const updateEmployeeData = async (form_data) => {
    try {
        console.log("form data", form_data)
        const response = await axios.put(`http://localhost:8000/data/${form_data.id}`, {
            // id:form_data.id,
            name: form_data.name,
            designation: form_data.designation,
            department: form_data.department,
            salary: form_data.salary,
            joining_date: form_data.joining_date
        })
        // console.log("data:  ", data)
        return response;
    } catch (error) {
        console.log("error : ", error)
        return error;
    }
}

export const deleteEmployeeData = async (user_id) => {
    try {
        const response = await axios.delete(`http://localhost:8000/data/${user_id}`,)
        // console.log("data:  ", data)
        return response;
    } catch (error) {
        console.log("error : ", error)
        return error;
    }
}
