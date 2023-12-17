import { Request, Response } from "express";
import Notification from "../models/notification.model";
import * as sendMailHelper from "../../../helpers/sendMail"

// [POST] /api/v1/notifications/
export const sendNotification = async (req: Request, res: Response) => {
    const email: string = "kanh3430@gmail.com"
    const result = await Notification.findOne({
        email: email
    })
    if (!result) {
        const timeExpire: number = 10;
        const message: string = "Nhiệt độ trong vườn đang quá cao, vui lòng kiểm tra để tránh ảnh hưởng đến cây trồng và phòng chống cháy nổ"
        const objectNotification = {
            email: email,
            message: message,
            expireAt: Date.now() + timeExpire * 60 * 1000,
        };
        // Việc 1: Lưu vào database
        const notification = new Notification(objectNotification);
        await notification.save();

        //  Việc 2: Gửi thông báo qua email
        const subject = "Thông báo từ hệ thống IOT";
        const html = `
            <b>${message}</b> (Nếu nhiệt độ vẫn đang tăng cao, hệ thống sẽ gửi lại thông báo trong ${timeExpire} phút).
        `;

        sendMailHelper.sendMail(email, subject, html);
        res.json({
            code: 200,
            message: "Đã gửi mã thông báo qua email!"
        });
    }
    else {
        res.status(400).json({
            code: 400,
            message: "Đã gửi thông báo"
        })
    }
}