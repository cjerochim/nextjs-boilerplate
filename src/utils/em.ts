// NOTE - Theme returns a FontSize property which could be a string | number | undefined
// TODO - Research how to retrieve value
const em = (value: any): string => {
  const emValue = parseInt(value, 10) / 16;
  return `${emValue}em`;
};

export default em;
