import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/data">Map Data</Link>
        </li>
        <li>
          <Link to="/carddata">Card Data Mapping</Link>
        </li>
        <li>
          <Link to="/authdata">Author Data Mapping</Link>
        </li>
        <li>
          <Link to="/tabledata">Table Data Display</Link>
        </li>
      </ul>
    </>
  );
}
export default Home;
