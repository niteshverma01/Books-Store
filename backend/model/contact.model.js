import mongoose from "mongoose";

// Contact Schema
const contactSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // Converts email to lowercase
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ], // Email validation
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 10, // Ensures message has at least 10 characters
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically adds current timestamp
  },
});

export default mongoose.model("Contact", contactSchema);
