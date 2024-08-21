import express, { json } from 'express'
import { default as mongoose } from 'mongoose'
import cors from "cors"
const app = express()

dotenv.config()
const port = process.env.PORT||3000

app.use(cors())
app.use(json())

const mongoURI=process.env.mongoURI;

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDb Connected"))
.catch(err=>console.log('MongoDb Connection Error',err)
)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})