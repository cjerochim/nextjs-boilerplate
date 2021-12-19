import { Theme } from "@mui/material";

// Helper fn to trigger theme option
const toVariantDefault =
  <T>(
    targetVariant: T,
    fn: (theme: Theme) => string,
    dFn: (theme: Theme) => string
  ) =>
  () =>
  (props: any): string => {
    const { variant, theme } = props;
    if (targetVariant === variant) return fn(theme);
    return dFn(theme);
  };

export default toVariantDefault;
