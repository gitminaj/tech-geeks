import express from 'express';
import 'dotenv/config';
import db from './config/db.js'
const app = express();

const PORT = process.env.PORT || 8000;

db(process.env.DB_URL);

app.listen(PORT , ()=>{
    console.log(`sever is running at port ${PORT}`)
});