const isProd = process.env.NODE_ENV === "production";
const innerROUTES = {
  HOME: `/`,
  ABOUT: `/about`,
  EXPERIENCE: "/experience",
  PROJECTS: "/projects",
  RESUME: "/resume",
  CONTACTS: "/contacts",
};
export const ROUTE_NAMES = isProd
  ? Object.keys(innerROUTES).forEach((element) => {
      let currRoute = innerROUTES[element];
      innerROUTES[element] = `/Portfolio${currRoute}`;
    })
  : innerROUTES;
