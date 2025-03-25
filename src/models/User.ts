import mongoose from "mongoose";
// import { Gender, UserStatus, UserRole, OrgCategory } from "./user.enum";
// import { ObjectId } from "../../constant/type";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHERS = "others",
  COMMON = "",
}

export enum UserRole {
  HUSTLER = "hustler",
  HIRER = "hirer",
  ADMIN = "admin",
}

export enum UserStatus {
  PENDING = "pending",
  ACTIVE = "active",
  INACTIVE = "inactive",
  REVOKED = "revoked",
  PENDING_APPROVAL = "pending_approval",
  REJECTED = "rejected",
}

export enum OrgCategory {
  COMPANY = "company",
  AGENCY = "agency",
  TALENT_HIRER = "talent_hirer",
  OTHER = "other",
}

export const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      set: (value: string) => value.toLowerCase(),
    },
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 6,
    },
    location: {
      type: String,
      trim: true,
    },
    linkedinUrl: { type: String, trim: true },
    companyName: { type: String, trim: true },
    companyDescription: { type: String, trim: true },
    companyUrl: { type: String, trim: true },
    companyLogo: { type: String, trim: true },
    socialLinks: [
      {
        name: { type: String, trim: true },
        link: { type: String, trim: true },
      },
    ],
    dob: Date,
    country: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: Gender,
      default: Gender.COMMON,
    },
    age: {
      type: Number,
      min: 18,
    },
    profileImage: {
      type: String,
    },
    role: [
      {
        type: String,
        default: UserRole.HUSTLER,
        enum: UserRole,
      },
    ],
    occupation: { type: String, trim: true },
    website: {
      type: String,
      trim: true,
    },
    resetId: {
      type: String,
      unique: true,
      sparse: true,
    },
    status: {
      type: {
        status: {
          type: String,
          enum: UserStatus,
          default: UserStatus.ACTIVE,
        },
        inActiveDate: String,
      },
      default: {
        status: UserStatus.ACTIVE,
      },
    },
    resume: {
      type: String,
      trim: true,
    },
    coverLetter: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    topSkills: [
      {
        type: String,
        trim: true,
      },
    ],
    skills: [
      {
        type: ObjectId,
        ref: "skill",
      },
    ],
    orgCategory: {
      type: String,
      default: OrgCategory.COMPANY,
      enum: OrgCategory,
    },
    openRoles: [
      {
        type: ObjectId,
        refPath: "jobrole",
      },
    ],
    workLocations: [
      {
        type: String,
        trim: true,
      },
    ],
    perks: [
      {
        type: String,
        trim: true,
      },
    ],
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    appCredits: {
      type: Number,
      default: 0,
      min: 0,
    },
    uid: {
      type: String,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
    auth_provider: {
      type: String,
      trim: true,
    },
    resetPasswordMetaData: {
      type: {
        attempts: {
          type: Number,
        },
        sentAt: {
          type: Date,
        },
        hashedOtp: {
          type: String,
        },
        secureKey: {
          type: String,
        },
        otpExpiresIn: {
          type: Date,
        },
      },
    },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1, isDeleted: 1 }, { unique: true });
UserSchema.index({ email: 1, role: 1 }, { unique: true });

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.resetId;
  delete user.refreshToken;
  return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
