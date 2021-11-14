export const priceNormalized = (value: number) => String(value)
  .split('')
  .reverse()
  .map((char, i) => ((i + 1) % 3 === 0 ? ` ${char}` : `${char}`))
  .reverse()
  .join('')
  .trim();

export const capitalizeFirst = (str: string) => {
  if (str.length < 2) return str;
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
};
