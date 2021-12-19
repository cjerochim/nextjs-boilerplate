import toError from "./toError";
import toErrorText from "./toErrorText";

type FormikResponse = {
  startValue: any;
  endValue: any;
  startName: string;
  endName: string;
  onStartChange: (e: any) => void;
  onEndChange: (e: any) => void;
  startError: boolean;
  endError: boolean;
  starthelperText: string;
  endHelperText: string;
};

const toFormikDateRange = (
  formik: any,
  { startAttr, endAttr }: { startAttr: string; endAttr: string }
): FormikResponse => {
  return {
    startValue: formik.values[startAttr],
    endValue: formik.values[endAttr],
    onStartChange: formik.handleChange,
    onEndChange: formik.handleChange,
    startName: startAttr,
    endName: endAttr,
    // Assume an error for start date will be the same for end date
    // Evaluate the need to hanle both errors
    startError: toError(formik, startAttr),
    endError: toError(formik, endAttr),
    starthelperText: toErrorText(formik, startAttr),
    endHelperText: toErrorText(formik, endAttr),
  };
};

export default toFormikDateRange;
