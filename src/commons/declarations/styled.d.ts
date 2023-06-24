// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: {
        DEFAULT: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
        1100: string;
      };
      "light-accent": string;
      "dark-accent": string;
      "light-shades": string;
      "dark-shades": string;
      info: string;
      success: string;
      warning: string;
      danger: string;
      gray: {
        100: string;
        300: string;
      }
    };
  }
}
