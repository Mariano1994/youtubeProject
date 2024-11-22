import { formatDistance, subDays } from "date-fns";

export const DateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const DateFormatterFns = (firstDate: Date, secondDate: Date) => {
  return formatDistance(subDays(new Date(firstDate), 0), new Date(secondDate), {
    addSuffix: true,
  });
};

export const formatNumberToK = (num: number) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
};

export const truncatDescription = (description: string, maxLenght: number) => {
  if (description.length > maxLenght) {
    return description.substring(0, maxLenght) + "";
  }

  return description;
};
