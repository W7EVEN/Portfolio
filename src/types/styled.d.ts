import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lighter: string;
      primary: string;
      darker: string;

      secondary: string;

      background: string;
      secondBackground: string;
      text: string;
      selection: string;
      textSelection: string;
      oppositeColor: string;
    };
  }
}
