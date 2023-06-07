export const stringifyErrorMessage = (
  errorMessage: string | object | string[]
): string => {
  if (Array.isArray(errorMessage)) {
    return errorMessage.join(",");
  }

  if (typeof errorMessage === "object") {
    return JSON.stringify(errorMessage);
  }

  return errorMessage;
};
