import express from 'express';
const app = express();

app.use((req,res,next)=>{
    res.json({'mensaje':'Hola Middleware'});
});

app.get('/', (req,res)=>{
    res.send('Bienvenidos a nuestra API REST!');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));