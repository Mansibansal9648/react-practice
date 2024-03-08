import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
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
import ComponentWillUpdate from "./Components/componentWillUpdate";
import FormikForm from "./Components/formikForm";
import ServerFormFormikYup from "./Components/serverFormFormikYup";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
  <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/data" element={<DataMap />} />
      <Route path="/carddata" element={<CardDataMap />} />
      <Route path="/authdata" element={<AuthDataMap />} />
      <Route path="/tabledata" element={<TableDataMap />} />
      <Route path="/serverform" element={<ServerForm />} />
      <Route path="/componentwillupdate" element={<ComponentWillUpdate />} />
      <Route path="/formikform" element={<FormikForm />} />
      <Route path="/serverformformikyup" element={<ServerFormFormikYup />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);