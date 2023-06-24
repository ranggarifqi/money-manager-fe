import * as dateFns from "date-fns";

export const HUMANIZED_DATE = "d MMM yyyy";
export const DATE_ONLY_KEY = 'yyyy-MM-dd'

export const toHumanReadableDate = (date: string) => {
  return dateFns.format(dateFns.parseISO(date), "d MMM yyyy");
};
