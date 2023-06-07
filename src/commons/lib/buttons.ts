import { IBackgroundColor, ITextColor } from "../types/color";

interface ButtonThemes {
  bg: {
    [key in IBackgroundColor]: string;
  };
  textColor: {
    [key in ITextColor]: string;
  };
}

export const buttonThemes: ButtonThemes = {
  bg: {
    primary: "bg-main hover:bg-main-400",
    "dark-accent": "bg-dark-accent hover:bg-dark-accent-400",
    "light-accent": "bg-light-accent hover:bg-light-accent-400",
    "dark-shades": "bg-dark-shades hover:bg-dark-shades-400",
    "light-shades": "bg-light-shades hover:bg-light-shades-400",
    success: "bg-success hover:bg-success-400",
    danger: "bg-danger hover:bg-danger-400",
    info: "bg-info hover:bg-info-400",
    warning: "bg-warning hover:bg-warning-400",
  },
  textColor: {
    light: "text-light-shades",
    dark: "text-dark-shades",
  },
};
