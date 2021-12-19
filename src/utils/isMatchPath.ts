/* Suggest review solution based on routing complexity  */
const isMatchPath = (path: string, href: string): boolean => {
  const isMatch = path.includes(href);
  return isMatch;
};

export default isMatchPath;
