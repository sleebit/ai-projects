import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    projectSlug: {
      type: String,
    },
    data: {
      type: Object,
    },
    geo: {
      type: Object,
    },
    deviceInfo: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const Analytics =
  mongoose.models.analytics || mongoose.model("analytics", analyticsSchema);

export default Analytics;
