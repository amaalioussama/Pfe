const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const openai = require("openai");
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/users");

app.use(authRoutes);

app.use(chatRoutes);
app.use(userRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Connected at http://localhost:${PORT}`);
});
