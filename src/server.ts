import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res)=>{
res.send('Server is healthy');
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})