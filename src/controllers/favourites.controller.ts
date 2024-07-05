import { Request, Response } from "express";
import { Favourite } from "../database/models/Favourite";


//POST
export const createFavourite = async (req: Request, res: Response) => {
    try {
      const userId =  req.tokenData.id
      const book_Id = req.body.book_id
      if(!book_Id){
        return res.status(400).json(
            {
                success: false,
                message:" book is required",
            }
        )
      }
      const newFavourite = await Favourite.create(
        {
            book_id : book_Id,
            user_id: userId
        }
      ).save()
      res.status(201).json(
        {
            success: true,
            message:" created favourite",
            data: newFavourite
        }
      )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message : "error created favourite",
                error: error
            }
        )
    }
}


//DELETE
export const deleteFavouritesById = async (req: Request, res: Response) => {
    try {
        //1. Recuperamos el id del favourite
        const favouriteID = req.params.id
        const userID = req.tokenData.id

        //2. Comprobar si este favourite ID existe
        const userFav = await Favourite.findOne(
            {
                where: {
                   id: parseInt(favouriteID),
                   user_id: userID
                }
            }
        )
        
        //3. Validar la informacion obtenida
        if(!userFav){
            return res.status(404).json(
                {
                    success: false,
                    message: "Favourite not found!"
                }
            )
        }
        const favDeleted = await Favourite.delete(
            {
                id: parseInt(favouriteID)
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "Favourite deleted successfully!",
                data: favDeleted
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Cannot delete favourite book!",
                error: error
            }
        )
    }
}