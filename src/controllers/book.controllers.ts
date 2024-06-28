import { Request, Response } from "express";

//GET
export const getBooks = (req: Request, res: Response) => {
    res.send('GET ALL BOOKS')
}

//POST
export const createBooks = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.author);

    res.json({
        success: true,
        message: 'CREATE BOOK'
    })
}

//UPDATE
export const updateBookById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `BOOK UPDATED with id: ${req.params.id}`
    })
}

//DELETE
export const deleteBookById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `BOOK DELETED With id: ${req.params.id}`
    })
}