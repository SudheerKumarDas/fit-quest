import express from "express"

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("fit quest app");
})

export default app;