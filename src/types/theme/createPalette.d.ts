import { Palette } from '@material-ui/core/styles/createMuiTheme';

export type MappedPaletteOptions = 'black' |
  'slateGray' |
  'darkBlue' |
  'legendYellow' |
  'legendGreen' |
  'mintGreen' |
  'mint' |
  'slate' |
  'legendRed' |
  'errorRed' |
  'oceanBlue' |
  'dataBlue' |
  'dataTurquoise' |
  'dataTeal' |
  'dataGreen' |
  'dataYellow' |
  'differenceBackground' |
  'wellPaidGreen' |
  'wellPaidBlue' |
  'white';

export interface CustomPaletteOptions {
  black: React.CSSProperties['color'];
  slateGray: React.CSSProperties['color'];
  slate: React.CSSProperties['color'];
  darkBlue: React.CSSProperties['color'];
  legendYellow: React.CSSProperties['color'];
  legendGreen: React.CSSProperties['color'];
  mintGreen: React.CSSProperties['color'];
  mint: React.CSSProperties['color'];
  legendRed: React.CSSProperties['color'];
  errorRed: React.CSSProperties['color'];
  oceanBlue: React.CSSProperties['color'];
  dataBlue: React.CSSProperties['color'];
  dataTurquoise: React.CSSProperties['color'];
  dataTeal: React.CSSProperties['color'];
  dataGreen: React.CSSProperties['color'];
  dataYellow: React.CSSProperties['color'];
  differenceBackground: React.CSSProperties['color'];
  wellPaidGreen: React.CSSProperties['color'];
  wellPaidBlue: React.CSSProperties['color'];
  white: React.CSSProperties['color'];
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Palette  extends CustomPaletteOptions {}
  interface PaletteOptions extends CustomPaletteOptions {}
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette extends CustomPaletteOptions {}
  interface PaletteOptions extends CustomPaletteOptions {}
}
