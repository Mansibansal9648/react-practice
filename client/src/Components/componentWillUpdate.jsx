import { useEffect, useState } from "react"

function ComponentWillUpdate(){
const [count,setCount]=useState(0)
const [name,setName]=useState({full_name:""})
useEffect(()=>{
calculateSquare()
},[count])

useEffect(()=>{
console.log("api call",name)
},[name])

function calculateSquare(){
    console.log("count**2",count**2);
}
    return <>
    <button type="button" onClick={()=>{setCount(count+1)}}>Counter {count}</button>
    <br/>
    <br/>
    Name : 
    <input type="text" value={name.full_name} name="full_name" onChange={(event)=>setName({full_name:event.target.value})}/>
    </>
}
export default ComponentWillUpdate;