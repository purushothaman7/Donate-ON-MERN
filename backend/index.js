require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()
const authRoutes = require("./routes/authRoutes");
const donateRoutes = require("./routes/donateRoutes");
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth",authRoutes);
app.use("/api/donate",donateRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT} and db is connected`);
  })
})
.catch((err)=>{
  console.log(err);
})

