const PORT = 3000;
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

let posts = [
    {
        id : 'BIEL',
        title: 'Teste do Mural',
        description : 'Desc test'
    }
]

app.get("/all", (req, res)=>{

    res.json(JSON.stringify(posts));

});

app.post("/new", bodyParser.json(), (req, res)=>{
    
    let id = generateID()
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id, title, description})

    res.send("Post adicionado!")

});



app.listen(PORT, ()=>{
    console.log('Server running on port', PORT)
})


function generateID(){
    return Math.random().toString(36).substring(2,9)
}