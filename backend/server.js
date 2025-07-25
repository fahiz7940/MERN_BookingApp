import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import reservationRoute from './routes/reservationRoute.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/reservations', reservationRoute)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>console.log('Server started on Port ' + port))