export const formatCurrency = (value) =>
  new Intl.NumberFormat(undefined, {
    // style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
