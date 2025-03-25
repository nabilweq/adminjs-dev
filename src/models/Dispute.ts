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

  
  export enum DisputeStatus {
    IN_PROGRESS = "inprogress",
    RESOLVED = "resolved",
    ESCALATED = "escalated",
  }

  
  export enum MilestoneStatus {
    PENDING_START = "pending_start",
    IN_PROGRESS = "in_progress",
    SUBMITTED_FOR_REVIEW = "submitted_for_review",
    APPROVED = "approved",
    PAYMENT_PENDING = "payment_pending",
    PAYMENT_FAILED = "payment_failed",
    PAYMENT_RELEASED = "payment_released",
    PAYMENT_COMPLETED = "payment_completed",
    REVISIONS_REQUESTED = "revisions_requested",
    DISPUTE_IN_PROGRESS = "dispute_in_progress",
    ESCALATED = "escalated",
    COMPLETED = "completed",
    REVISION_REQUESTED = "revision_requested",
  }
  

const ProjectDisputeSchema = new mongoose.Schema(
  {
    projectId: {
      type: ObjectId,
      ref: "Project",
      required: true,
    },
    milestoneId: {
      type: ObjectId,
    //   ref: "Milestone",
      required: true,
    },
    disputeReason: {
      type: String,
      trim: true,
      required: true,
    },
    disputeExplanation: {
      type: String,
      trim: true,
      required: true,
    },
    proof: {
      type: [String],
      required: true,
    },
    previousProjectStatus: {
      type: String,
      enum: ProjectStatus,
    },
    previousMilestoneStatus: {
      type: String,
      enum: MilestoneStatus,
    },
    raisedBy: {
      userId: {
        type: ObjectId,
        ref: "User",
        required: true,
      },
      role: {
        type: [String],
        required: true,
      },
    },
    isResolved: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: DisputeStatus,
      default: "inprogress",
      required: true,
    },
  },
  { timestamps: true }
);

const ProjectDispute = mongoose.model("ProjectDispute", ProjectDisputeSchema);

export default ProjectDispute;
