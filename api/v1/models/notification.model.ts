import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        email: String,
        message: String,
        expireAt: { type: Date, expires: 0 },
    },
    {
        timestamps: true,
    }
);

const  Notification = mongoose.model("Notification", notificationSchema, "notification");

export default Notification