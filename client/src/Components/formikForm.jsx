import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
function FormikForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("values: ", values);
        action.resetForm();
      },
    })
    // console.log("errors: ", errors);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && touched.name ? (<p>{errors.name}</p>) :null }
        <br />
        <label for="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email ? (<p>{errors.email}</p>) :null }
        <br />
        <label for="password">Password : </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password ? (<p>{errors.password}</p>) :null }
        <br />
        <label for="confirm_password">Confirm Password : </label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="Enter your confirm password"
          value={values.confirm_password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) :null }
        <br />
        <button type="submit">Registration</button>
      </form>
    </>
  );
}
export default FormikForm;
