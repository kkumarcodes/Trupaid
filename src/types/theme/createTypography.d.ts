// https://javascript.plainenglish.io/extend-material-ui-theme-in-typescript-a462e207131f
// https://stackoverflow.com/questions/61120760/how-to-extend-material-ui-theme-with-typescript
// https://www.bergqvist.it/blog/2020/6/26/extending-theme-material-ui-with-typescript
// https://www.mi4t.me/blog/howt-to-extend-material-ui-theme/
import createTypography from "@material-ui/core/styles/createTypography";

export type CustomVariant =
  | "h1"
  | "h2"
  | "h3"
  | "codeValue"
  | "largeText"
  | "subtitle1"
  | "fieldInputLabel"
  | "listItem1"
  | "body1"
  | "body2"
  | "buttonLabel"
  | "graphAxisLabel"
  | "smallText1"
  | "tileChoiceLabel"
  | "tagsLegendLabel"
  | "formErrorMessage"
  | "smallText2";
// Bellow variants weren't specified in designs
// | 'caption'
// | 'button'
// | 'overline'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'subtitle2'

declare module "@material-ui/core/styles/createTypography" {
  export type Variant = CustomVariant;

  export interface Typography
    extends Record<Variant, TypographyStyle>,
      FontStyle,
      TypographyUtils {}

  export interface TypographyOptions
    extends Partial<
      Record<Variant, TypographyStyleOptions> & FontStyleOptions
    > {}

  export default function createTypography(
    palette: Palette,
    typography: TypographyOptions | ((palette: Palette) => TypographyOptions)
  ): Typography;
}
