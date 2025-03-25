import mongoose from "mongoose";
export const ObjectId = mongoose.Types.ObjectId;

export enum ProjectStatus {
    NOT_STARTED = "not_started",
    IN_PROGRESS = "in_progress",
    PAUSED = "paused",
    PENDING_REVIEW = "pending_review",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    PAYMENT_PENDING = "payment_pending",
    PAYMENT_RELEASED = "payment_released",
    DISPUTE_IN_PROGRESS = "dispute_in_progress",
    AWAITING_RESPONSE = "awaiting_response",
    ACTION_REQUIRED = "action_required",
    DELAYED = "delayed",
    ON_HOLD = "on_hold",
    ESCALATED = "escalated",
  }
  

const ProjectSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    proposalId: {
      type: ObjectId,
    //   ref: "Proposal",
      required: true,
    },
    status: {
      type: String,
      enum: ProjectStatus,
      default: ProjectStatus.NOT_STARTED,
      required: true,
    },
    lastUpdated: {
      type: Date,
      required: true,
    },
    job: {
      type: ObjectId,
      ref: "Job",
      required: true,
    },
    bids: [
      {
        type: ObjectId,
        // ref: "Bid",
        required: true,
      },
    ],
    recentActivity: {
      type: String,
      trim: true,
    },
    owner: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    milestoneIds: [
      {
        type: ObjectId,
        // ref: "Milestone",
      },
    ],
    isPaused: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    // cancellationReason: {
    //     type: String,
    //     trim: true,
    // },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
