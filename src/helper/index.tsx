export const priceNormalized = (value: number) => String(value)
  .split('')
  .reverse()
  .map((char, i) => ((i + 1) % 3 === 0 ? ` ${char}` : `${char}`))
  .reverse()
  .join('')
  .trim();
