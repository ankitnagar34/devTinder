const express = require('express');

const app = express();


app.use("/secretData",(req,res) =>
{
    res.send("kii haal aee ooe");
});

app.use("/help",(req,res) => 
{
    res.send("Hello From The Server");
});

app.use((req,res) =>
    {
        res.send("Swagat Hai Humare Server Pe");
    });
    

app.listen(9211, () => {
    console.log("server is successfully listening on port 9211");

});
