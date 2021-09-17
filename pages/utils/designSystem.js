const paddingHorizontal = 25;
const defaultWidth = 1134;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const mq = {
  maxMobile: `@media screen and (max-width: ${Rem(480)})`,
  minTablet: `@media screen and (min-width: ${Rem(481)})`,
  maxTablet: `@media screen and (max-width: ${Rem(768)})`,
  minXsmall: `@media screen and (min-width: ${Rem(769)})`,
  maxXsmall: `@media screen and (max-width: ${Rem(1024)})`,
  minSmall: `@media screen and (min-width: ${Rem(1025)})`,
  maxSmall: `@media screen and (max-width: ${Rem(1200)})`,
  minLarge: `@media screen and (min-width: ${Rem(1201)})`,
  maxLarge: `@media screen and (max-width: ${Rem(1920)})`,
  minXlarge: `@media screen and (min-width: ${Rem(1921)})`,
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
    maxWidth: `${Rem(totalWidth)}`,
    paddingRight: `${Rem(paddingHorizontal)}`,
    paddingLeft: `${Rem(paddingHorizontal)}`,
  },
  flex: {
    col: '1 0 0%',
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  clearfix: {
    '&::after': {
      display: 'block',
      clear: 'both',
      content: '""',
    },
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

export const Clamp = (line, height, lineheight = '1.2') => (`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
  max-height: ${height / 16}rem;
  line-height: ${lineheight};
`);

export function Rem(px) {
  const result = px / 16;
  return `${result}rem`;
};

export function Em(px) {
  const result = px / 16;
  return `${result}em`;
};

export default {};
