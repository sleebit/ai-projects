import mongoose from "mongoose";

const subscribersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: [true, "We already have your email with us ;-)"],
    },
  },
  {
    timestamps: true,
  }
);

const Subscribers =
  mongoose.models.subscribers ||
  mongoose.model("subscribers", subscribersSchema);

export default Subscribers;
