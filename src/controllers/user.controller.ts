import { Request, Response } from "express";
import { User } from "../database/models/User";


export const getAllUsers = async (req: Request, res: Response) => {
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


export const getUserProfile = async (req: Request, res: Response) => {
    try {
        // 1. recuperar id del usuario a traves del del token
        const userId = req.tokenData.id;

        //2. buscarlo en la base de datos
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )

        //3. responder
        res.json(
            {
                success: true,
                message: "users profile retrieved",
                data: user
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Profile cant be retrieved"
            }
        )
    }
}