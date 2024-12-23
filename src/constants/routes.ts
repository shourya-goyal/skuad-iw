interface RouteType {
  path: string;
  auth: boolean;
}

export const ROUTES: Record<string, RouteType> = {
  login: {
    path: "/login",
    auth: false,
  },
  signup: {
    path: "/signup",
    auth: false,
  },
  dashboard: {
    path: "/dashboard",
    auth: true,
  },
};
