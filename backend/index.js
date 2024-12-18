import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";



app.use(cors());
app.use(express.json());


dotenv.config();




const PORT = process.env.PORT || 4001;
const URL = process.env.MongoDBURL;


try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
