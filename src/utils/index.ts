import { UseToastOptions } from "@chakra-ui/react";
import moment from "moment";
const DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm:ss";
const DATE_TIME_FORMAT_ONE = "DD/MM/YYYY HH:mm";

export * from "./getEnv";

export const showSortAddress = (address: string): string => {
  return `${address?.substr(0, 4)}...${address?.substr(
    address.length - 4,
    address.length - 1
  )}`;
};
export const convertNumberTextInput = (str?: string) => {
  if (!str) return 0;
  const v = str.split(",").join("");
  return v ? parseFloat(v) : 0;
};

export const numberFormat = (number: number | string) =>
  new Intl.NumberFormat().format(Number(number));

export const getToast = (
  description: string | object,
  status: UseToastOptions["status"] = "error",
  title = "Error"
): UseToastOptions => {
  if (typeof description === "string")
    return {
      title,
      status,
      position: "top-right",
      description,
      duration: 3000,
    };
  let msg = "something wrong!";
  // @ts-ignore no problem in operation, although type error appears.
  if (typeof description === "object" && description["message"]) {
    // @ts-ignore no problem in operation, although type error appears.
    msg = description["message"];
  }
  return {
    title,
    status,
    position: "top-right",
    description: msg,
    duration: 3000,
  };
};

export const showTransactionHash = (tranHash: string) => {
  return `${tranHash?.substring(0, 10)}${"".padStart(
    5,
    "*"
  )}${tranHash?.substring(tranHash.length - 10, tranHash.length)}`;
};

export function formatDate(date: Date) {
  return moment(date).format(DATE_TIME_FORMAT);
}

export const endDate = (date: Date, days: number) => {
  return moment(date).add(days, "days").format(DATE_TIME_FORMAT);
};

export function isAfter(dateNum: number): boolean {
  const currentDate = moment();
  const date = moment.unix(dateNum);
  return date.isAfter(currentDate);
}

export function formatDateYYYYMMDDHHMMSS(date: number) {
  return moment(date * 1000).format(DATE_TIME_FORMAT_ONE);
}

export function parseBalance(balanceWei: number | string, decimals = 18) {
  if (!balanceWei || balanceWei === 0) {
    return 0;
  }

  let afterDecimal;
  const weiString = balanceWei.toString();
  const trailingZeros = /0+$/u;

  const beforeDecimal =
    weiString.length > decimals
      ? weiString.slice(0, weiString.length - decimals)
      : "0";
  afterDecimal = ("0".repeat(decimals) + balanceWei)
    .slice(-decimals)
    .replace(trailingZeros, "");

  if (afterDecimal === "") {
    afterDecimal = "0";
  }

  if (afterDecimal.length > 3) {
    afterDecimal = afterDecimal.slice(0, 3);
  }

  return parseFloat(`${beforeDecimal}.${afterDecimal}`);
}

export const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fromNow = (time: number) => moment(time).fromNow();
