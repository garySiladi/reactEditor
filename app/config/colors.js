const originalColors = {
  primary: '63adf2',
  secondary: '2e382e',
  accent: '848c8e',
  greyish: 'ccdbdc',
  whitey: 'eff7ff',
  greyhound: 'a1aebb'
};

const color = name =>
  typeof originalColors[name] !== 'undefined'
    ? `#${originalColors[name]}`
    : name;

export default color;
