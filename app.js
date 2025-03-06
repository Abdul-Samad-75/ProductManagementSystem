import express from "express";
import "dotenv/config"
import { connect } from "mongoose";
import cors from "cors"
import productRoutes from "./router/product.routes.js";

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req,res) => {
    res.send("Backend running")
})

app.use('/api',productRoutes)


const port = 5000

app.listen(port, () => {
    connect(process.env.DB_URL)
    console.log('DB connected');
    console.log(`Server running at http://localhost:${port}`);
    
})

