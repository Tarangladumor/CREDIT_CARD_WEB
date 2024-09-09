import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { respond } from "./utils/response.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { cloudinaryConnect } from "./config/cloudinary.js";
import { authMiddleware } from "./middleware/auth.js";
import cardRouter from "./routes/Card.js";
import adminRouter from "./routes/Admin.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

// CORS configuration
app.use(
  cors({
    origin: "https://credit-card-k00m31733-tarangladumors-projects.vercel.app", // Remove trailing slash here
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'headers'],
  })
);

// Cloudinary configuration
cloudinaryConnect();

// Routes
app.use('/api/v1/admin', authMiddleware, adminRouter);
app.use("/api/v1/card", cardRouter);

// Basic route to check server status
app.get('/admin', (req, res) => {
  res.send('Welcome to the admin area');
});

app.get("/", (req, res) => {
  return respond(res, "Your Server is up and running", 200, true);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Your server started at ${PORT}`);
});
