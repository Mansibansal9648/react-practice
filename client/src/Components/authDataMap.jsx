import { useState } from "react";
import testData from "../utils/testData";
import AuthCard from "../common/authCard";
import BackButton from "../common/backbutton";
function AuthDataMap() {
  const [data, setData] = useState(testData);
  return (
    <>
      <BackButton />
      <AuthCard data={data} setData={setData} />
    </>
  );
}
export default AuthDataMap;
