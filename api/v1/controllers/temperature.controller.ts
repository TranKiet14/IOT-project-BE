import { Request, Response } from "express";
import Temperature from "../models/temperature.model";

//[GET] /temperature/
export const index = async (req: Request, res: Response): Promise<void> => {
    interface Find {
        deleted: Boolean
    }
    const find: Find = {
        deleted: false
    }
    const temperatures = await Temperature.find(find)
    res.json(temperatures)
}
//[POST] /temperature/create
export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const temperature = new Temperature(req.body);
        const data = await temperature.save()
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