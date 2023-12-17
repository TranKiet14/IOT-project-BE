import mongoose from "mongoose"

const humiditySchema = new mongoose.Schema(
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

const Humidity = mongoose.model("Humidity", humiditySchema, "humidities");

export default Humidity