import { useState, useEffect } from "react";
import BackButton from "../common/backbutton";
function DataMap() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((finalRes) => {
        console.log(finalRes);
        setData(finalRes);
      });
  }, []);
  //   const data = [{ name: "mansi" }, { name: "aman" }, { name: "shelly" }];
  return (
    <>
      <BackButton />
      {data.map(function (param1) {
        return (
          <>
            <h3>{param1.userId}</h3>
            <h3>{param1.id}</h3>
            <h3>{param1.title}</h3>
            <h3>{param1.body}</h3>
          </>
        );
      })}
    </>
  );
}
export default DataMap;
