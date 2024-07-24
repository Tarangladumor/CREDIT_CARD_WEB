import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/database.js";
import { respond } from "./utils/response.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { cloudinaryConnect } from "./config/cloudinary.js";
import { authMiddleware } from "./middleware/auth.js";
import cardRouter from "./routes/Card.js";
import adminRouter from "./routes/Admin.js";
import cors from "cors"

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
}))

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

cloudinaryConnect();

app.use('/api/v1//admin',authMiddleware,adminRouter)

app.use("/api/v1/card",cardRouter);

app.get('/admin', (req, res) => {
    res.send('Welcome to the admin area');
});

app.get("/" , (req,res) => {
    return respond(res,"Your Server is up and running",200,true)
});

app.listen(PORT, () => {
    console.log(`your server started at ${PORT}`)
});