const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("hi i am mohit");
});

app.listen(3004,()=>{
    console.log("server is listening at port 3004");
});