import { config } from "dotenv";

config();

export const appConfig = {
  mongoUrl: process.env.MONGO_URI ?? "",
  sessionSecret: process.env.SESSION_SECRET ?? "",
  nodeEnv: process.env.NODE_ENV ?? "",
  port: process.env.PORT ?? "",
  adminEmail: process.env.ADMIN_EMAIL ?? "",
  adminPassword: process.env.ADMIN_PASSWORD ?? ""
};
