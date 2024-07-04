import { Request, Response } from "express";
import { User } from "../database/models/User";


export const getAllUsers = async(req: Request, res: Response) => {
    try {
        // 1. recuperar de la bd los usuarios
        const users = await User.find(
            {
                select: {
                    id: true,
                    email: true,
                    is_active: true,
                    created_at: true
                }
            }
        )
        res.json(
            {
                success: true,
                message: "All users retrieved",
                data: users
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "error retrieving users"
            }
        )
    }
}
