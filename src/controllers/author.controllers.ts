import { Request, Response } from "express";
import { Author } from "../database/models/Author";


//POST
export const createAuthor = async (req: Request, res: Response) => {

    try {
        //1.recuperar informacion
        const name = req.body.name;
        const nationality = req.body.nationality;


        //2.validacion
        if (!name) {
            return res.status(400).json(
                {
                    success: false,
                    message: "name is required"
                }
            )
        }

        if (!nationality) {
            return res.status(400).json(
                {
                    success: false,
                    message: "nationality is required"
                }
            )
        }

        //3.tratar informacion


        //4.guardar en la base de datos
        const newAuthor = await Author.create(
            {
                name: name,
                nationality: nationality
            }
        ).save();


        //5.responder
        res.status(200).json({
            success: true,
            message: 'Author created succesfully',
            data: newAuthor
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error creating author"
            }
        )

    }
}



//GET
export const getAuthor = async (req: Request, res: Response) => {
    try {
        //1.recuperar informacion
        const limit = Number(req.query.limit || 5)
        const page = Number(req.query.page || 1)
        const authors = await Author.find({
            skip: (page - 1) * limit,
            take: limit
        })

        //2.responder
        res.status(200).json({
            success: true,
            message: "All authors retrieved succesfully",
            data: authors

        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Cant retieve authors",
                error: error
            }
        )
    }
}



//UPDATE
export const updateAuthorById = async (req: Request, res: Response) => {
    try {

        //1.recuperar informacion
        const authorIdToUpdate = req.params.id
        const body = req.body

        //2.validar informacion

        //3.tratar informacion

        //4.actualizar en base de datos

        const authorUpdated = await Author.update(
            {
                id: parseInt(authorIdToUpdate)
            },
            body
        )

        //5.responder
        res.status(200).json({
            success: true,
            message: "author updated",
            date: authorUpdated
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "author cant be updated",
                error: error
            }
        )
    }
}



//DELETE
export const deleteAuthorById = async (req: Request, res: Response) => {
    try {

        //1.recuperar informacion
        const authorIdToDelete = Number(req.params.id)

        //2.eliminarlo de la bd
        const authorDeleted = await Author.delete(authorIdToDelete)

        if (!authorDeleted.affected) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Author doesnt exist"
                }
            )
        }

        //3.responder
        res.status(200).json({
            success: true,
            message: "author deleted succesfully",
            date: authorDeleted
        })

    } catch (error) {

        res.status(500).json(
            {
                success: false,
                message: "Error deleting author",
                error: error
            }
        )
    }
}

