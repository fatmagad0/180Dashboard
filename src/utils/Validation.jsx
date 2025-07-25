import * as Yup from "yup";

export const Validation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits"),

  level: Yup.number()
    .required("Level is required")
    .typeError("Please enter a valid level")
    .min(1, "Level must be at least 1")
    .max(7, "Level must be at most 7"),

  age: Yup.number()
    .typeError("Please enter a valid number")
    .required("Age is required")
    .min(17, "Minimum age is 17")
    .max(40, "Maximum age is 40"),
});

export default Validation;
