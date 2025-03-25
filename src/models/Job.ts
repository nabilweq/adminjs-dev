import mongoose from "mongoose";
export const ObjectId = mongoose.Types.ObjectId;
export enum TimelineUnit {
    DAYS = "days",
    WEEKS = "weeks",
    MONTHS = "months",
  }
  
  export enum PaymentType {
    HOURLY = "hourly",
    WEEKLY = "weekly",
    MONTHLY = "monthly",
  }
  
  export enum JobMode {
    REMOTE = "remote",
    ONSITE = "onsite",
    HYBRID = "hybrid",
  }
  
  export enum JobType {
    FULL_TIME = "full-time",
    PART_TIME = "part-time",
    FREELANCE = "freelance",
    CONTRACT = "contract",
  }
  
  export enum ExperienceLevel {
    ENTRY = "entry",
    MID = "mid",
    SENIOR = "senior",
    EXPERT = "expert",
  }
  
  export enum JobStatus {
    OPEN = "open",
    CLOSED = "closed",
    PAUSED = "paused",
  }
  
  export enum JobCategory {
    ONE_TIME = "onetime",
    ONGOING = "ongoing",
  }
  

const JobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    rateType: {
      type: String,
      enum: PaymentType,
    },
    apprenticeship: {
      type: Boolean,
      default: false,
    },
    // maxBudget: {
    //   type: Number,
    //   min: 0,
    //   required: true,
    // },
    // minBudget: {
    //   type: Number,
    //   min: 0,
    //   required: true,
    // },
    budget: {
      type: Number,
      min: 0,
      required: true,
    },
    vacancy: {
      type: Number,
      min: 0,
      required: true,
    },
    currency: {
      type: String,
      trim: true,
      default: "INR",
    },
    duration: {
      type: {
        unit: {
          type: String,
          enum: TimelineUnit,
          required: true,
        },
        value: {
          type: Number,
          min: 0,
          required: true,
        },
      },
    },
    location: {
      type: String,
      trim: true,
    },
    jobType: {
      type: String,
      enum: JobType,
      required: true,
    },
    jobMode: {
      type: String,
      enum: JobMode,
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ExperienceLevel,
    },
    status: {
      type: String,
      enum: JobStatus,
      default: JobStatus.OPEN,
    },
    applicationDeadline: {
      type: Date,
    },
    requirements: {
      type: [String],
    },
    responsibilities: {
      type: [String],
    },
    benefits: {
      type: [String],
    },
    skills: [
      {
        type: ObjectId,
        ref: "skill",
      },
    ],
    jobCategory: {
      type: String,
      enum: JobCategory,
      default: JobCategory.ONE_TIME,
    },
    views: {
      type: Number,
      default: 0,
    },
    applicationsCount: {
      type: Number,
      default: 0,
    },
    interests: {
      type: [String],
    },
    industry: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

export default Job;
