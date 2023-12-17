import mongoose from "mongoose"

const temperatureSchema = new mongoose.Schema(
  {
    value: Number,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Temperature = mongoose.model("Temperature", temperatureSchema, "temperatures");

export default Temperature