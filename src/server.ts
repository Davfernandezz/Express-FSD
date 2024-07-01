import 'dotenv/config';
import express from 'express';
import { createAuthor, deleteAuthorById, updateAuthorById } from './controllers/author.controllers';
import { getBooks, createBooks, deleteBookById, updateBookById } from './controllers/book.controllers';
import { AppDataSource } from './database/db';


const app = express();

//middleware

app.use(express.json())

const PORT = process.env.PORT || 4000;

app.get('/healthy', (req, res) => {

    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        }
    )
})


//AUTHORS

//POST
app.post('/authors', createAuthor)

//PUT
app.put('/authors/:id', updateAuthorById);

//DELETE
app.delete('/authors/:id', deleteAuthorById);



//BOOKS

//GET
app.get('/books', getBooks);

//POST
app.post('/books', createBooks);


//PUT
app.put('/books/:id', updateBookById);

//DELETE
app.delete('/books/:id', deleteBookById);



AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running. on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error)
    })