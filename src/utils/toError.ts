const toError = (formik: any, attr: string): boolean => {
  return formik.touched[attr] && Boolean(formik.errors[attr]);
};

export default toError;
