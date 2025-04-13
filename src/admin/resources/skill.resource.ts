import SkillSet from "../../models/Skill.js";

export default {
  resource: SkillSet,
  options: {
    listProperties: ["skill", "status", "createdByAdmin"],
    showProperties: ["skill", "status", "createdByAdmin"],
    editProperties: ["skill", "status", "createdByAdmin"],
    filterProperties: ["skill", "status", "createdByAdmin"],
  },
};