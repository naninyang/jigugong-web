const paddingHorizontal = 25;
const defaultWidth = 1134;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const mq = {
  maxMobile: `@media screen and (max-width: ${Relative(481)}rem)`,
  maxTablet: `@media screen and (min-width: ${Relative(481)}rem)`,
  minTablet: `@media screen and (max-width: ${Relative(768)}rem)`,
  maxXsmall: `@media screen and (min-width: ${Relative(769)}rem)`,
  minXsmall: `@media screen and (max-width: ${Relative(1024)}rem)`,
  maxSmall: `@media screen and (min-width: ${Relative(1025)}rem)`,
  minSmall: `@media screen and (max-width: ${Relative(1200)}rem)`,
  maxLarge: `@media screen and (min-width: ${Relative(1201)}rem)`,
  minLarge: `@media screen and (max-width: ${Relative(1920)}rem)`,
  minXlarge: `@media screen and (min-width: ${Relative(1921)}rem)`,
};

export const fontWeights = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
};

export const colors = {
  black: '#000',
  white: '#FFF',
};

export const styles = {
  widthSettings: {
    width: '100%',
    maxWidth: `${Relative(totalWidth)}rem`,
    paddingRight: `${Relative(paddingHorizontal)}rem`,
    paddingLeft: `${Relative(paddingHorizontal)}rem`,
  },
  flex: {
    col: '1 0 0%',
  },
  screenReaderOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',
    border: 0,
  },
};

export function Relative(px) {
  const result = px / 16;
  return `${result}`;
};

export default {};
