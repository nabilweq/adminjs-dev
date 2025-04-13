import Job from "../../models/Job.js";

export default {
    resource: Job,
    options: {
        listProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
        showProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
        editProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
        filterProperties: ["createdBy", "title", "description", "applicationsCount", "budget"],
    },
};