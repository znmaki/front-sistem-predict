import cookies from "js-cookie";

export const setCookie = (key: string, value: string, days: number) => {
  cookies.set(key, JSON.stringify(value), { expires: days });
};

export const getCookie = (key: string) => {
  const cookie = cookies.get(key);
  return cookie ? JSON.parse(cookie) : undefined;
};

export const removeCookie = (key: string) => {
  cookies.remove(key);
};
