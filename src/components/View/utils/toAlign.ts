export type Align = "left" | "center" | "right";

const toAlign = (align: Align): string => {
  switch (align) {
    case "center":
      return "center";
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
  }
};

export default toAlign;
