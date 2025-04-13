import User from "../../models/User.js";

export default {
  resource: User,
  options: {
    listProperties: ["profileImage", "firstName", "lastName", "email", "status.status"],
    showProperties: ["profileImage", "firstName", "lastName", "email", "status.status"],
    editProperties: ["profileImage", "firstName", "lastName", "email", "status.status"],
    properties: {
      profileImage: {
        type: "string",
        components: {
          list: "ImageComponent",
          show: "ImageComponent",
        },
      },
    },
  },
};