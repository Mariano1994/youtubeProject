import { formatDistance, subDays } from "date-fns";

export const DateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const DateFormatterFns = (firstDate: any, secondDate: any) => {
  return formatDistance(subDays(new Date(firstDate), 0), new Date(secondDate), {
    addSuffix: true,
  });
};

export const formatNumberToK = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "k";
  }
  return num.toString();
};

export const truncatDescription = (description: string, maxLenght: number) => {
  if (description.length > maxLenght) {
    return description.substring(0, maxLenght) + "";
  }

  return description;
};
