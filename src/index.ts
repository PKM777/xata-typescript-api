import express, { Express, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/api/example", (req:Request, res:Response)=>{
    res.json({msg:"hello get "})
})

app.post("/api/example", (req:Request, res:Response)=>{
    res.json({msg:"hello post "})
})

app.put("/api/example/:id", (req:Request, res:Response)=>{
    res.json({msg:"hello put "})
})


app.delete("/api/example/:id", (req:Request, res:Response)=>{
    res.json({msg:"hello delete "})
})








app.listen(port, ()=>{
    console.log("server is running on port 3000")
})