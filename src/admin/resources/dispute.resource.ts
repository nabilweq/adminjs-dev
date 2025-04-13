import ProjectDispute from "../../models/Dispute.js";

export default {
  resource: ProjectDispute,
  options: {
    properties: {
      "raisedBy.userId": {
        type: "reference",
        target: "User",
        isVisible: { list: true, show: true, edit: true, filter: true },
      },
      "projectId": {
        type: "reference",
        target: "Project",
        isVisible: { list: true, show: true, edit: true, filter: true },
      },
      proof: {
        type: "mixed",
        isArray: true,
        isVisible: { list: true, show: true, edit: true, filter: false },
        components: {
          list: "DocumentComponent",
          show: "DocumentComponent",
        },
      },
    },
    listProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
    showProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
    editProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
    filterProperties: ["disputeReason", "disputeExplanation", "projectId", "proof", "raisedBy.userId", "isResolved", "status"],
  },
};