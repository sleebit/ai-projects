import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
    },
    geo: {
      type: Object,
    },
    data: {
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
