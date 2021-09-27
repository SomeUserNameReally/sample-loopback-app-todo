export const POSTGRESQL_HOST = process.env.POSTGRESQL_HOST ?? '';
export const POSTGRESQL_PORT = +(process.env.POSTGRESQL_PORT ?? -1);
export const POSTGRESQL_USER_ID = process.env.POSTGRESQL_USER_ID ?? '';
export const POSTGRESQL_USER_PASSWORD =
  process.env.POSTGRESQL_USER_PASSWORD ?? '';
export const POSTGRESQL_DATABASE_NAME =
  process.env.POSTGRESQL_DATABASE_NAME ?? '';
