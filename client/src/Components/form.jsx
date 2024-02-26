import { useState } from "react";
import BackButton from "../common/backbutton";
function Form() {
  const dummyData = {
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    gender: "",
    current_ctc: "",
    expected_ctc: "",
    qualification: "",
    language: {
      html: false,
      css: false,
      js: false,
      bootstrap: false,
      react: false,
    },
    address: "",
    cv: "",
  };
  const [data, setData] = useState(initialState());
  // function onChangeFNameHandler(event) {
  //   //console.log(event.target.value);
  //   setData({ ...data, firstName: event.target.value });
  // }

  // function onChangeLNameHandler(event) {
  //   // console.log(event.target.value);
  //   setData({ ...data, lastName: event.target.value });
  // }
  // function onChangeDOBHandler(event) {
  //   //console.log(event.target.value);
  //   setData({ ...data, dob: event.target.value });
  // }

  function onChangeHandler(event) {
    if (event.target.type == "checkbox") {
      // console.log(event.target.checked);
      setData({
        ...data,
        language: {
          ...data.language,
          [event.target.name]: event.target.checked,
        },
      });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  }
  // function onChangeLanguageHandler(event) {
  //   console.log(event);
  //   setData({
  //     ...data,
  //     language: {
  //       ...data.language,
  //       [event.target.name]: event.target.checked,
  //     },
  //   });
  // }
  function initialState() {
    return dummyData;
  }
  function submitData() {
    console.log(data);
    alert("data submitted successfully");
    setData(initialState());
  }
  return (
    <>
      <BackButton />
      <form>
        <label for="fname">First Name : </label>
        <input
          type="text"
          id="fname"
          name="firstName"
          placeholder="Enter your first name"
          value={data.firstName}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label for="lname">Last Name : </label>
        <input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Enter your last name"
          value={data.lastName}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label for="dob">Date of Birth : </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={data.dob}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label for="phone">Contact Number : </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your contact Number"
          value={data.phone}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label>Gender : </label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={data.gender == "male"}
          onChange={onChangeHandler}
        />
        <label for="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={data.gender == "female"}
          onChange={onChangeHandler}
        />
        <label for="female">Female</label>
        <br />
        <br />
        <label for="current_ctc">Current CTC :</label>
        <input
          type="text"
          id="current_ctc"
          name="current_ctc"
          placeholder="Enter your Current CTC (in lakhs)"
          value={data.current_ctc}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label for="expected_ctc">Expected CTC : </label>
        <input
          type="text"
          id="expected_ctc"
          name="expected_ctc"
          placeholder="Enter your Expected CTC (in lakhs)"
          value={data.expected_ctc}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label for="qualification">Qualification : </label>
        <input
          type="text"
          id="qualification"
          name="qualification"
          placeholder="Enter your Highest Qualification "
          value={data.qualification}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label>Language and frameworks you are familiar with : </label>
        <input
          type="checkbox"
          id="html"
          name="html"
          value="html"
          checked={data.language.html}
          onChange={onChangeHandler}
        />
        <label for="html">HTML</label>
        <input
          type="checkbox"
          id="css"
          name="css"
          value="css"
          checked={data.language.css}
          onChange={onChangeHandler}
        />
        <label for="css">CSS</label>
        <input
          type="checkbox"
          id="js"
          name="js"
          value="js"
          checked={data.language.js}
          onChange={onChangeHandler}
        />
        <label for="js">Javascript</label>
        <input
          type="checkbox"
          id="bootstrap"
          name="bootstrap"
          value="bootstrap"
          checked={data.language.bootstrap}
          onChange={onChangeHandler}
        />
        <label for="bootstrap">Bootstrap</label>
        <input
          type="checkbox"
          id="react"
          name="react"
          value="react"
          checked={data.language.react}
          onChange={onChangeHandler}
        />
        <label for="react">React</label>
        <br />
        <br />
        <label for="address">Address : </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your Address "
          value={data.address}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <label for="cv">Upload your CV : </label>
        <input
          type="file"
          id="cv"
          name="cv"
          value={data.cv}
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <button type="button" onClick={submitData}>
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
