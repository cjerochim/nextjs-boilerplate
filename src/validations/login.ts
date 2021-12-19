import * as yup from "yup";

export interface LoginProps {
  email: string;
  password: string;
}

export const initialValues: LoginProps = {
  email: "",
  password: "",
};

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Email must be valid")
    .required("Email required"),
  password: yup.string().required("Password required"),
});

export default schema;
