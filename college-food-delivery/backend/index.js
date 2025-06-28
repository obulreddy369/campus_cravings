import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js';
import { dbConnection } from './config/db.js';

dotenv.config({
    path: ".env"
});

const app = express();
dbConnection();
app.use(express.json());
app.use(cookieParser());

// CORS options
const corsOptions = {
    origin: "http://localhost:5173",  
    credentials: true
};
app.use(cors(corsOptions));

app.use('/api/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
