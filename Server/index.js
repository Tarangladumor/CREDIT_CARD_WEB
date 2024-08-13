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
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://credit-card-web.vercel.app",
        "https://credit-card-j2akttu7g-tarangladumors-projects.vercel.app",
        // Add other allowed origins if needed
      ];
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Optional: Manually adding CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://credit-card-j2akttu7g-tarangladumors-projects.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

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
