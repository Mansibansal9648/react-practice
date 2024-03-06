import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces")
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name can't exceed 25 characters")
    .required("Please enter your name"),
  email: Yup.string().email("Please enter a valid email address").required("Please enter your email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please enter your confirm password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
