const toErrorText = (formik: any, attr: string): string => {
  return formik.touched[attr] && formik.errors[attr];
};

export default toErrorText;
