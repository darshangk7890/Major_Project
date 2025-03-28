//library imports
const express = require('express');
const dotenv = require('dotenv');
const next = require('next');
const cors = require('cors');

//imports of backend
const connectDB = require('./backend/DB_Config/db');
const { errorHandler } = require('./backend/Middlewares/errorMiddleware');
const userRoutes = require('./backend/Routes/userRoutes');

// Correct Next.js configuration
const dev = process.env.NODE_ENV !== 'production';
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

//env file is loaded
dotenv.config();

//database integration
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Handle Next.js routes
app.get("*", (req, res) => {
    return handle(req, res);
});

// Start server
nextServer.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
  });
});