import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/form";
import Home from "./Components/home";
import DataMap from "./Components/dataMap";
import CardDataMap from "./Components/cardDataMap";
import AuthDataMap from "./Components/authDataMap";
export default function App() {
  return (
    <div>
      {/* <Form /> */}
      {/* <DataMap /> */}
      {/* <CardDataMap /> */}
      <AuthDataMap />
    </div>
  );
}
