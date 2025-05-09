import * as Yup from "yup";

export const useRegister = () => {
  const nameValidationObj: Yup.StringSchema<
    string,
    Yup.AnyObject,
    undefined,
    ""
  > = Yup.string()
    .min(1, "Field cant be empty")
    .max(50, "Too long")
    .required("Required");

  const validationSchema = Yup.object({
    firstName: nameValidationObj,
    lastName: nameValidationObj,
    email: Yup.string()
      .required("Required")
      .max(30, "Too Long!")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid email format"
      ),
    password: Yup.string()
      .min(8, "Minimum 8 symbols")
      .matches(
        /^(?=.*[A-Za-z])(?=(?:.*(?:[A-Z]|[^A-Za-z0-9])){2,}).+$/,
        "The password must contain a minimum of one letter and at least two characters: capital letters or special characters"
      )
      .required("Required!"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Passwords must match"
    ),
  });
  return { validationSchema };
};
