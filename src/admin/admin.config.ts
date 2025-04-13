import AdminJS from "adminjs";
import * as AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import { ComponentLoader } from "adminjs";
import path from "path";
import { authenticate } from "./auth.js";

import UserResource from "./resources/user.resource.js";
import JobResource from "./resources/job.resource.js";
import SkillResource from "./resources/skill.resource.js";
import DisputeResource from "./resources/dispute.resource.js";
import ProjectResource from "./resources/project.resource.js";

import { appConfig } from "../config/env.js";

const __dirname = path.resolve();
const componentLoader = new ComponentLoader();

componentLoader.add("ImageComponent", path.join(__dirname, "src", "components", "Image.tsx"));
componentLoader.add("DocumentComponent", path.join(__dirname, "src", "components", "Document.tsx"));

AdminJS.registerAdapter(AdminJSMongoose);

export const adminJs = new AdminJS({
  rootPath: "/admin",
  componentLoader,
  branding: {
    companyName: "Huzl Admin",
    logo: false,
    favicon: "/static/favicon.ico",
    theme: {
      colors: {
        primary100: "#16a34a",
        primary80: "#22c55e",
        primary60: "#4ade80",
        primary40: "#86efac",
        primary20: "#bbf7d0",
        accent: "#16a34a",
      },
    },
  },
  resources: [
    UserResource,
    JobResource,
    SkillResource,
    DisputeResource,
    ProjectResource,
  ],
});

export const buildAdminRouter = () =>
  AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate,
    cookiePassword: appConfig.sessionSecret,
  });
