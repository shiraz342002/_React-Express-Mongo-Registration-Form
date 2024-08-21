import express, { json } from 'express'
import { default as mongoose } from 'mongoose'
import dotenv from 'dotenv'; 
import cors from "cors"
import User from './model/registration.model.js';
const app = express()

dotenv.config()
const port = process.env.PORT||3000

app.use(cors())
app.use(json())

const mongoURI=process.env.MONGODB_URI;


mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDb Connected"))
.catch(err=>console.log('MongoDb Connection Error',err)
)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',async(req,res)=>{
  try{
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user)
  }catch(err){
    console.log("Some error Occured in Backend",err);
    
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})