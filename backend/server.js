import express  from 'express'
import dotenv  from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

connectDB()
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send("server ready...")
})

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`listening to port http://localhost:${port}`)
})