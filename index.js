import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import createBookRoute from './routes/createBook.js';



dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;

if(!mongoURI) {
    console.log("cant get connection");
    process.exit(1); // 0 for clean exit, 1 for exit with error
}


app.get('/health', (req, res) => {
    res.send('MongoDB, Express, and Node.js are working!');
});

async function main() {
    try {
        await mongoose.connect(mongoURI);
        console.log("works");
    } catch (error) {
        console.error("doesn't work" + error);
    }
}


main();

// calling for each route
// example of API: send data from pointA to pointB
// main url: http://localhost:3000/
// end point: http://localhost:3000/api/books

app.use('/api/books', createBookRoute);

app.listen(port, () => {
    // Log a message when the server is running
    console.log(`Server running at http://localhost:${port}/`);
}).on('error', (err) => {
    // Log server errors if any
    console.error('Error starting server:', err);
});