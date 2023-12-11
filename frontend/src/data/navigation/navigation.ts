import { ROUTES } from "../routes/routes";

export const HEADER_NAVIGATION = [ROUTES.about, ROUTES.blog, ROUTES.contacts];

export const STICKY_NAV_NAVIGATION = {
  about: [ROUTES.blog, ROUTES.contacts],
  blog: [ROUTES.about, ROUTES.contacts],
  contacts: [ROUTES.about, ROUTES.blog]
};
