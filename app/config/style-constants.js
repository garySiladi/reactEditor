const fontSizeRate = 1.333;
const baseLineHeight = 1.25;

export const fontSize = level => `${fontSizeRate ** level}rem`;
export const baseStep = level => `${baseLineHeight ** level}em`;
export const getTypography = level => {
  const calculatedLineHeight = fontSizeRate ** level * baseLineHeight;
  return `
    font-size: ${fontSize(level)};
    line-height: ${calculatedLineHeight}rem;
`;
};
