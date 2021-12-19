type MediaQuerySize = "xs" | "sm" | "md" | "lg" | "xl";

const mq =
  (size: MediaQuerySize) =>
  ({ theme }: { theme: any }): string => {
    return theme.breakpoints.up(size);
  };

export default mq;
