import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/usersDB";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB error:", err);
  }
};

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  pass: {
    type: String,
    required: true,
    minlength: 5,
  },
});

export const User = mongoose.model("User", userSchema);
