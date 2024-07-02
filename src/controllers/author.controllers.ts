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
    res.json({
        success: true,
        message: 'Author created succesfully',
        data: newAuthor
    })
    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message: "Error creating author"
            }
        )
        
    }
}

//GET
export const getAuthor = async(req: Request, res: Response) => {
    try {
        //1.recuperar informacion
        const authors = await Author.find()

        //2.responder
        res.json({
            success: true,
            message: "All authors retrieved succesfully",
            data: authors
           
        })

    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message: "Cant retieve authors",
                error: error
            }
        )
    }
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