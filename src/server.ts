import express from "express";
import mongoose from "mongoose";
import AdminJS from "adminjs";
import { fileURLToPath } from "url";
import * as AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import { ComponentLoader } from 'adminjs';

import path from "path";
import dotenv from "dotenv";
import User from "./models/User.js";
import Job from "./models/Job.js";
import SkillSet from "./models/Skill.js";
import ProjectDispute from "./models/Dispute.js";
import Project from "./models/Project.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();
const ImageComponent = componentLoader.add(
  "ImageComponent",
  path.join(__dirname, "./components/ImageComponent")
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Register AdminJS Mongoose adapter
AdminJS.registerAdapter(AdminJSMongoose);

// Configure AdminJS
const adminJs = new AdminJS({
  componentLoader,
  resources: [
    {
      resource: User,
      options: {
        properties: {
          profileImage: {
            type: "string",
            isVisible: { list: true, show: true, edit: true, filter: false },
            components: {
              list: "Image",
              show: "Image",
            },
          },
        },
        listProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location", "profileImage"],
        showProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location", "profileImage"],
        editProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location", "profileImage"],
        filterProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location"],
      },
    }, 
    {
      resource: Job,
      options: {
        listProperties: ["createdBy", "title", "description", "rateType", "budget"],
        showProperties: ["createdBy", "title", "description", "rateType", "budget"],
        editProperties: ["createdBy", "title", "description", "rateType", "budget"],
        filterProperties: ["createdBy", "title", "description", "rateType", "budget"],
      }
    }, 
    {
      resource: SkillSet,
      options: {
        listProperties: ["skill", "status", "createdByAdmin"],
        showProperties: ["skill", "status", "createdByAdmin"],
        editProperties: ["skill", "status", "createdByAdmin"],
        filterProperties: ["skill", "status", "createdByAdmin"],
      }
    }, 
    {
      resource: ProjectDispute,
      properties: {
        "raisedBy.userId": {
          type: "reference",
          target: "User",
          isVisible: { list: true, show: true, edit: true, filter: true },
        },
      },
      options: {
        listProperties: ["disputeReason", "disputeExplanation", "proof", "raisedBy.userId", "isResolved", "status"],
        showProperties: ["disputeReason", "disputeExplanation", "proof", "raisedBy.userId", "isResolved", "status"],
        editProperties: ["disputeReason", "disputeExplanation", "proof", "raisedBy.userId", "isResolved", "status"],
        filterProperties: ["disputeReason", "disputeExplanation", "proof", "raisedBy.userId", "isResolved", "status"],
      }
    }, 
    {
      resource: Project,
      options: {
        listProperties: ["userId", "status", "job", "owner", "isPaid"],
        showProperties: ["userId", "status", "job", "owner", "isPaid"],
        editProperties: ["userId", "status", "job", "owner", "isPaid"],
        filterProperties: ["userId", "status", "job", "owner", "isPaid"],
      }
    }, 
  ],
  rootPath: "/admin",
});

// Create AdminJS Router
const adminRouter = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, adminRouter);

// Start Express Server
app.listen(PORT, () => {
  console.log(`AdminJS is running at http://localhost:${PORT}/admin`);
});
