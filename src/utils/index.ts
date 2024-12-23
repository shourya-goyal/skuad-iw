import { ROUTES } from "../constants/routes";

export const isAuthPage = (location: string): boolean => {
  const path = location.substring(1);
  return ROUTES[path] ? ROUTES[path].auth : false;
};
