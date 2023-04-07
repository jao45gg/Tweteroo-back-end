import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.post("/sign-up", (req,res) => {

    const { username, avatar } = req.body;
    users.push({username, avatar});
    
    res.send("OK");

});


const PORT = 5005; // MUDAR PARAR 5000 PARA ENTREGAR O PROJETO

app.listen(PORT, console.log(`Server online on port ${PORT}`));