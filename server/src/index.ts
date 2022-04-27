import AppRouter from "./routes";
import express from "express";
import connectDB from "../config/database";
const config =require('config');
const mongoose = require('mongoose');


const app = express();

const router = new AppRouter(app);
const port=5000

app.set("port", process.env.PORT || 5000);


app.listen(port, () => console.log(`Running on port ${port}`))
console.log('runing');