const express = require("express");

const connect = require("./configs/db")

const app = express();

app.use(express.json());  

const port  =  3001
app.listen(port, async function(){
    await connect();
    console.log(`listening on port ${port}`)
});