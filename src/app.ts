import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { adminJs, buildAdminRouter } from "./admin/admin.config.js";
import path from "path";
import { connectDB } from "./config/db.js";
import { appConfig } from "./config/env.js";

const app = express();
const __dirname = path.resolve();

app.use("/static", express.static(path.join(__dirname, "public")));

connectDB(); // Connect Mongo

// Session setup
app.use(
  session({
    store: MongoStore.create({ mongoUrl: appConfig.mongoUrl }),
    resave: false,
    saveUninitialized: true,
    secret: appConfig.sessionSecret,
    cookie: {
      httpOnly: true,
      secure: appConfig.nodeEnv === "production",
      maxAge: 1000 * 60 * 60, // an hour
    },
  })
);

app.use(adminJs.options.rootPath, buildAdminRouter());

export default app;
