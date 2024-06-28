import { Request, Response } from "express";

//POST
export const createAuthor = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.nationality)

    res.json({
        success: true,
        message: 'CREATE AUTHOR'
    })
}

//UPDATE
export const updateAuthorById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `AUTHOR UPDATED with id: ${req.params.id}`
    })
}

//DELETE
export const deleteAuthorById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `AUTHOR DELETED With id: ${req.params.id}`
    })
}