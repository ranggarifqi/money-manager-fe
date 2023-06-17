import { useMemo } from "react";

enum Currency {
  IDR = "IDR",
  USD = "USD",
  SGD = "SGD",
}

const localeMapping = {
  [Currency.IDR]: "id",
  [Currency.USD]: "en-US",
  [Currency.SGD]: "en-SG",
};

export const useCurrencyFormatter = () => {
  const formatter = useMemo(() => {
    const currency = Currency.IDR;
    return new Intl.NumberFormat([localeMapping[currency], "en-US"], {
      style: "currency",
      currency: currency.toString(),
    });
  }, []);

  const formatBalance = (balance?: number) => {
    return formatter.format(balance ?? 0);
  };

  return {
    formatBalance,
  };
};
