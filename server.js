const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Students'); 
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

app.get('/', (req, res) => {
  console.log("I am inside home page");
  res.send("Hello Anshhh");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
