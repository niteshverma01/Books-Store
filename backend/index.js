import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Added import for contact route

const app = express();

app.use(cors());
app.use(express.json());
app.use(contactRoute); // Use contact route

dotenv.config();

const PORT = process.env.PORT || 4001;
const URL = process.env.MongoDBURL;

try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Added contact route

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
