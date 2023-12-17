import { Request, Response } from "express";
import Humidity from "../models/humidity.model"

//[GET] /humidity/
export const index = async (req: Request, res: Response): Promise<void> => {
    interface Find {
        deleted: Boolean
    }
    const find: Find = {
        deleted: false
    }
    const humidities = await Humidity.find(find)
    res.json(humidities)
}
//[POST] /humidity/create
export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const humidity = new Humidity(req.body);
        const data = await humidity.save()
        res.json({
            code: 200,
            message: "Lưu thành công!",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: "Lưu thất bại!"
        })
    }
}