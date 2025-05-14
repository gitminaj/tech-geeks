import express from 'express';
import 'dotenv/config';
import db from './config/db.js';

import  userRoutes  from './routes/auth.js';
import categoryRoutes from './routes/category.js';
import courseRoutes from './routes/course.js';
import sectionRoutes from './routes/section.js';
import subSectionRoutes from './routes/subSection.js';
import profileRoutes from './routes/profile.js';
import reviewRoutes from './routes/reviewAndRating.js';

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
app.use('/api/course', courseRoutes);
app.use('/api', sectionRoutes);
app.use('/api', subSectionRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/review', reviewRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});


app.listen(PORT , ()=>{
    console.log(`sever is running at port ${PORT}`)
});