// Helper to simplify theme references wthin styles

const space =
  (v: number = 2) =>
  ({ theme }: { theme: any }): string =>
    theme.spacing(v);

export default space;
