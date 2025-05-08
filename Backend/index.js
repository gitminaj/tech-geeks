import express from 'express';
import 'dotenv/config';
import db from './config/db.js';

import  userRoutes  from './routes/auth.js';
import categoryRoutes from './routes/category.js';
import courseRoutes from './routes/course.js';
import sectionRoutes from './routes/section.js';

const app = express();

const PORT = process.env.PORT || 8000;

// database connection
db(process.env.DB_URL);

// middleware
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


// routes
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', courseRoutes);
app.use('/api', sectionRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});


app.listen(PORT , ()=>{
    console.log(`sever is running at port ${PORT}`)
});