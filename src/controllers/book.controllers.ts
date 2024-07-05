import { Request, Response } from "express";
import { Book } from "../database/models/Book";


//POST
export const createBooks = async (req: Request, res: Response) => {
    try {

        // 1.recuperar la info
        const tittle = req.body.tittle
        const description = req.body.description
        const author_id = req.body.author_id

        //2.validacion
        if (!tittle || !description || !author_id) {
            return res.status(400).json(
                {
                    success: false,
                    message: "tittle, description and author is needed"
                }
            )
        }

        //3.validar si el libro por isbn existe

        //4.guardar en base de datos
        const newBook = await Book.create(
            {
                tittle: tittle,
                description: description,
                author_id: author_id
            }
        ).save()

        // 5. responder
        res.status(201).json(
            {
                success: true,
                message: "book created",
                data: newBook
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "book cant be created",
                error: error
            }
        )
    }
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


//GET
export const getBooks = async (req: Request, res: Response) => {
    try {
        // 1.Recuperar los libros
        const books = await Book.find(
            {
                select: {
                    tittle: true,
                    description: true,
                    author: {
                        id: true,
                        name: true,
                        nationality: true
                    }
                },
                relations: {
                    author: true
                }
            }
        )

        res.json(
            {
                success: true,
                message: "Books retrieved",
                data: books
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "error retrieving books",
                error: error
            }
        )
    }
}