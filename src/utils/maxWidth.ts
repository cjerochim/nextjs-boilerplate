import em from "./em";

const maxWidth =
  () =>
  ({ theme }: { theme: any }): string =>
    em(theme.app.maxWidth);

export default maxWidth;
