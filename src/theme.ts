const Theme: any = {};

Theme.colors = {
  primary: '#0275d8',
  secondary: '#5cb85c',
  info: '#5bc0de',
  warning: '#f0ad4e',
  danger: '#d9534f',
  inverse: '#292b2c',
  faded: '#f7f7f7',
};

Theme.typography = {
  sansSerifFontFamily: '"Open Sans", sans-serif',
  monospaceFontFamily: '"Space Mono", monospace',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.5',
  color: Theme.colors.inverse,
};

export { Theme };

export type ThemeType = typeof Theme;
