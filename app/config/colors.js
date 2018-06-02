const originalColors = {
  primary: '63adf2',
  secondary: '2e382e',
  accent: '848c8e',
  greyish: 'ccdbdc',
  whitey: 'eff7ff',
  toolbar: 'd2dde8',
  greyhound: 'a1aebb',
  orange: 'f26363',
  slightGrey: '435043',
  ashes: 'c4d0dc'
};

const color = name =>
  typeof originalColors[name] !== 'undefined'
    ? `#${originalColors[name]}`
    : name;

export default color;
