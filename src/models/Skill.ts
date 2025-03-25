import mongoose from "mongoose";

export enum SkillStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    REVOKED = "revoked",
    NEW = "new",
    PENDING = "pending",
  }
  

const SkillSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
    },
    status: {
      type: String,
      default: SkillStatus.PENDING,
      enum: SkillStatus,
    },
    createdByAdmin: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

SkillSchema.pre("save", function (next) {
  if (this.createdByAdmin) {
    this.status = SkillStatus.ACTIVE;
  }
  next();
});

const SkillSet = mongoose.model("skill", SkillSchema);

export default SkillSet;
