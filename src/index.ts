import express, { Express, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log("server is running on port 3000")
})