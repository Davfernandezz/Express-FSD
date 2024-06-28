import express from 'express';

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res)=>{
res.send('Server is healthy');
})


app.post('/authors', (req, res)=>{
console.log(req.body);
console.log(req.body.name);
console.log(req.body.nationality);

    res.send('authors CREATED')
})


app.put('/authors/:id', (req, res)=>{
    console.log(req.params.id)
    res.send(`authors UPDATED with id: ${req.params.id}`)
})

app.delete('/authors/:id', (req, res)=>{
    res.send(`authors DELETED with id: ${req.params.id}`)
})


app.get('/books', (req, res)=>{
    res.send('GET ALL BOOKS')
})

app.post('/books', (req, res)=>{
    res.send('BOOK CREATED')
})

app.put('/books', (req, res)=>{
    res.send('BOOK UPDATED')
})

app.delete('/books', (req, res)=>{
    res.send('BOOK DELETED')
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})