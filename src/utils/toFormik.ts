import toError from "./toError";
import toErrorText from "./toErrorText";

type FormikResponse = {
  value: any;
  id: string;
  onChange: (e: any) => void;
  error: boolean;
  name: string;
  helperText: string;
};

const toFormik = (formik: any, attr: string): FormikResponse => {
  return {
    value: formik.values[attr],
    name: attr,
    id: attr,
    onChange: formik.handleChange,
    error: toError(formik, attr),
    helperText: toErrorText(formik, attr),
  };
};

export default toFormik;
