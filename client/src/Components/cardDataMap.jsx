import { useState } from "react";
import dummyData from "../utils/db";
import Card from "../common/card";
import BackButton from "../common/backbutton";
function CardDataMap() {
  const [data, setData] = useState(dummyData);
  return (
    <>
      <BackButton />
      <Card data={data} setData={setData} />
    </>
  );
}
export default CardDataMap;
