import * as dateFns from "date-fns";

export const toHumanReadableDate = (date: string) => {
  return dateFns.format(dateFns.parseISO(date), "d MMM yyyy");
};
