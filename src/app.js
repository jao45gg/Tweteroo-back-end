import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body;
    users.push({ username, avatar });

    res.send("OK");

});

app.post("/tweets", (req, res) => {

    const { username, tweet } = req.body;

    const found = users.find(u => u.username === username);
    found ? tweets.push({ username, tweet }) && res.send("OK") : res.send("UNAUTHORIZED");

});


const PORT = 5005; // MUDAR PARAR 5000 PARA ENTREGAR O PROJETO

app.listen(PORT, console.log(`Server online on port ${PORT}`));