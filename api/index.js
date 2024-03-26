import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
// import cookieParser from 'cookie-parser';
import path from 'path';


dotenv.config();


mongoose
    .connect('mongodb+srv://hammadaslam10:Hammad%40308@solxraf.mob7c4u.mongodb.net/solxraf', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('connected')).catch(() => console.log('failed to connect')).finally(() => console.log('start'));

const __dirname = path.resolve();

const app = express();

// Enable CORS for all routes
app.use(cors());


app.use(express.json());
// app.use(cookieParser());

app.listen(3001, () => {
    console.log('Server is running on port 3001!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});