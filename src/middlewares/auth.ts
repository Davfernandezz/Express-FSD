import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {

    if (!req.headers.authorization) {
        return res.status(401).json(
            {
                succes: false,
                message: "Unauthorized"
            }
        )
    }

    const token = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    next();

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Unauthorized",
                error: error
            }
        )
    }
}