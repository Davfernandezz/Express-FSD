import { Request, Response } from "express";
import { Author } from "../database/models/Author";

//POST
export const createAuthor = async (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.nationality)

    const newAuthor = await Author.create(
        {
            name: "datata",
            nationality: "spain"
        }
    ).save();

    res.json({
        success: true,
        message: 'Author created succesfully',
        data: newAuthor
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