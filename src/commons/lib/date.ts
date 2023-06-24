import * as dateFns from "date-fns";

export const HUMANIZED_DATE = "d MMM yyyy";
export const DATE_ONLY_KEY = "yyyy-MM-dd";

export const getDateFromString = (dateStr: string): Date => {
  const timestamp = Date.parse(dateStr);
  return new Date(timestamp);
};

export const toHumanReadableDate = (date: string) => {
  return dateFns.format(dateFns.parseISO(date), HUMANIZED_DATE);
};

export const toDateOnlyString = (date: string) => {
  return dateFns.format(dateFns.parseISO(date), DATE_ONLY_KEY);
};

export const getDayFromDateStr = (dateStr: string): number => {
  const date = getDateFromString(dateStr);
  return dateFns.getDate(date);
};

export const getMonthFromDateStr = (dateStr: string): number => {
  const date = getDateFromString(dateStr);
  return dateFns.getMonth(date) + 1;
};

export const getYearFromDateStr = (dateStr: string): number => {
  const date = getDateFromString(dateStr);
  return dateFns.getYear(date);
};
