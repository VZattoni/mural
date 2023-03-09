const PORT = 3000;
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

let posts = [
    {
        id : 'TEST123',
        title: 'Teste do Mural',
        description : 'Desc test'
    },
    {
        id : 'TEST123',
        title: 'Teste do Mural',
        description : 'Desc test'
    },
    {
        id : 'TEST123',
        title: 'Teste do Mural',
        description : 'Desc test'
    }
]

app.get("/all", (req, res)=>{

    res.json(JSON.stringify(posts));

});

app.post("/new", (req, res)=>{

});



app.listen(PORT, ()=>{
    console.log('Server running on port', PORT)
})