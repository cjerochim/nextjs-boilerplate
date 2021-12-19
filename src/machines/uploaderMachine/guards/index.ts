import { UploaderContext } from "..";

export const isEmpty = ({ loaderRefs }: UploaderContext) =>
  loaderRefs.length === 0;

export const isLimitReached = ({ loaderRefs, limit }: UploaderContext) => {
  if (limit === null) return false;
  return loaderRefs.length === limit;
};

export const isNotLimitReached = ({ loaderRefs, limit }: UploaderContext) => {
  if (limit === null) return true;
  return loaderRefs.length !== limit;
};
