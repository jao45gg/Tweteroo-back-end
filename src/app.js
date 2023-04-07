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

app.get("/tweets", (req, res) => {

    if (tweets.length === 0)
        return res.send([]);

    const last10Tweets = [];
    for (let index = 0; index < tweets.length && index < 10; index++) {

        const tweetUser = users.filter(u => u.username === tweets[index].username)[0];
        last10Tweets.push({
            username: tweets[index].username,
            avatar: tweetUser.avatar,
            tweet: tweets[index].tweet
        })

    }

    res.send(last10Tweets);

});

const PORT = 5000;

app.listen(PORT, console.log(`Server online on port ${PORT}`));