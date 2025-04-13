import app from "./app.js";
import { appConfig } from "./config/env.js";

const PORT = appConfig.port || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/admin`);
});


// ---------------------------------------------- old code -------------

// import express from "express";
// import mongoose from "mongoose";
// import AdminJS from "adminjs";
// import { fileURLToPath } from "url";
// import * as AdminJSExpress from "@adminjs/express";
// import * as AdminJSMongoose from "@adminjs/mongoose";
// import { ComponentLoader } from "adminjs";
// import path from "path";
// import dotenv from "dotenv";

// // Import Mongoose Models
// import User from "./models/User.js";
// import Job from "./models/Job.js";
// import SkillSet from "./models/Skill.js";
// import ProjectDispute from "./models/Dispute.js";
// import Project from "./models/Project.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use("/static", express.static("public"));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const componentLoader = new ComponentLoader();

// const ImageComponent = componentLoader.add(
//   "ImageComponent",
//   path.join(__dirname, "components", "Image.tsx")
// );

// const DocumentComponent = componentLoader.add(
//   'Document',
//   path.join(__dirname, "components", "Document.tsx")
// );

// mongoose.connect(process.env.MONGO_URI as string)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.error("❌ MongoDB Connection Error:", err));

// AdminJS.registerAdapter(AdminJSMongoose);

// const adminJs = new AdminJS({
//   rootPath: "/admin",
//   componentLoader,
//   branding: {
//     companyName: "Huzl Admin",
//     logo: false,
//     favicon: "/static/favicon.ico",
//     theme: {
//       colors: {
//         primary100: "#16a34a",
//         primary80: "#22c55e",
//         primary60: "#4ade80",
//         primary40: "#86efac",
//         primary20: "#bbf7d0",
//         accent: "#16a34a",
//       },
//     },
//   },
//   resources: [
//     {
//       resource: User,
//       options: {
//         properties: {
//           profileImage: {
//             type: "string",
//             isVisible: { list: true, show: true, edit: true, filter: false },
//             components: {
//               list: ImageComponent,
//               show: ImageComponent,
//             },
//           },
//         },
//         listProperties: ["profileImage", "firstName", "lastName", "email", "phoneNumber", "skills", "location"],
//         showProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location", "profileImage"],
//         editProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location", "profileImage"],
//         filterProperties: ["firstName", "lastName", "email", "phoneNumber", "skills", "location"],
//       },
//     },
//     {
//       resource: Job,
//       options: {
//         listProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
//         showProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
//         editProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
//         filterProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
//       },
//     },
//     {
//       resource: SkillSet,
//       options: {
//         listProperties: ["skill", "status", "createdByAdmin"],
//         showProperties: ["skill", "status", "createdByAdmin"],
//         editProperties: ["skill", "status", "createdByAdmin"],
//         filterProperties: ["skill", "status", "createdByAdmin"],
//       },
//     },
//     {
//       resource: ProjectDispute,
//       options: {
//         properties: {
//           "raisedBy.userId": {
//             type: "reference",
//             target: "User",
//             isVisible: { list: true, show: true, edit: true, filter: true },
//           },
//           "projectId": {
//             type: "reference",
//             target: "Project",
//             isVisible: { list: true, show: true, edit: true, filter: true },
//           },
//           proof: {
//             type: "mixed",
//             isArray: true,
//             isVisible: { list: true, show: true, edit: true, filter: false },
//             components: {
//               list: DocumentComponent,
//               show: DocumentComponent,
//             },
//           },
//         },
//         listProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
//         showProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
//         editProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
//         filterProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
//       },
//     },
//     {
//       resource: Project,
//       options: {
//         listProperties: ["userId", "status", "job", "owner", "isPaid"],
//         showProperties: ["userId", "status", "job", "owner", "isPaid"],
//         editProperties: ["userId", "status", "job", "owner", "isPaid"],
//         filterProperties: ["userId", "status", "job", "owner", "isPaid"],
//       },
//     },
//   ],
// });

// const adminRouter = AdminJSExpress.buildRouter(adminJs);
// app.use(adminJs.options.rootPath, adminRouter);

// app.listen(PORT, () => {
//   console.log(`🚀 AdminJS is running at http://localhost:${PORT}/admin`);
// });
