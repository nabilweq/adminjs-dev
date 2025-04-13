import Project from "../../models/Project.js";

export default {
  resource: Project,
  options: {
    listProperties: ["userId", "status", "job", "owner", "isPaid"],
    showProperties: ["userId", "status", "job", "owner", "isPaid"],
    editProperties: ["userId", "status", "job", "owner", "isPaid"],
    filterProperties: ["userId", "status", "job", "owner", "isPaid"],
  },
};