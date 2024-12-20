import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
// Import routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Added import for contact route



const sessionOptions = {
  
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true },
  };



const app = express();



app.use(session(sessionOptions));
app.use(cors());
app.use(express.json());
app.use(contactRoute); // Use contact route

dotenv.config();

const PORT = process.env.PORT || 4001;
const URL = process.env.MongoDBURL;


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(URL);
  console.log("Connected to MongoDB");
}


// Define routes

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Added contact route

if(process.env.NODE_ENV==="production"){
const dirPath=path.resolve;
app.use(express.static("frontend/dist"));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"frontend","dist","index.html"))
})
}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
