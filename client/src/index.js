import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Form from "./Components/form";
import NotFound from "./Components/notFound";
import DataMap from "./Components/dataMap";
import AuthDataMap from "./Components/authDataMap";
import CardDataMap from "./Components/cardDataMap";
import TableDataMap from "./Components/tableDataMap";
import ServerForm from "./Components/serverForm";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/data" element={<DataMap />} />
      <Route path="/carddata" element={<CardDataMap />} />
      <Route path="/authdata" element={<AuthDataMap />} />
      <Route path="/tabledata" element={<TableDataMap />} />
      <Route path="/serverform" element={<ServerForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);