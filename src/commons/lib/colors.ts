import { IColor } from "../types/color";

export const getBGColor = (color?: IColor) => {
  if (!color || color === "primary") {
    return `bg-main`;
  }

  return `bg-${color}`;
};

export const getTextColor = (color?: IColor) => {
  if (!color) {
    return `text-white`;
  }
  if (color === "primary") {
    return `text-main`;
  }

  return `text-${color}`;
};
