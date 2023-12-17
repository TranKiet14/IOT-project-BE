"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const temperatureSchema = new mongoose_1.default.Schema({
    value: Number,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
}, {
    timestamps: true,
});
const Temperature = mongoose_1.default.model("Temperature", temperatureSchema, "temperatures");
exports.default = Temperature;
