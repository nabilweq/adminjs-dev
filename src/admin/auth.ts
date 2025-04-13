import bcrypt from "bcrypt";
import { appConfig } from "../config/env.js";

const adminCred = {
  email: appConfig.adminEmail,
  password: appConfig.adminPassword,
};

export const authenticate = async (email: string, password: string) => {
  if (email === adminCred.email && await bcrypt.compare(password, adminCred.password)) {
    return Promise.resolve({ email });
  }
  return null;
};
