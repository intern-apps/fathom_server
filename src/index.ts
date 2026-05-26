import express,{Request,Response} from 'express'
import cors from 'cors'
const app=express()
app.use(cors())

app.post("/",async(req:Request,res:Response)=>{

    const data =req.body;
    console.log("-----------------------------")
    console.log(data)
    console.log("-----------------------------")
    return res.status(202).json({data})
})

app.listen(3000)