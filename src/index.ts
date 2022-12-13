import express, { Express, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';
import { getXataClient, Example  } from './xata';
dotenv.config()


const xata = getXataClient()
const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/api/example", async (req:Request, res:Response)=>{
    const exData = await xata.db.example.getAll()
    res.json(exData)
})

app.post("/api/example", async (req:Request, res:Response)=>{
    const theData = req.body
    const storeData = await xata.db.example.create(theData)

    res.json(storeData)
})

app.put("/api/example/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    const examples = req.body
    const updateData = await xata.db.example.update(id, examples)
    res.json(updateData)
})


app.delete("/api/example/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    const deleteData = await xata.db.example.delete(id)
    res.json(deleteData)
})








app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
