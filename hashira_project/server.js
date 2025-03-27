const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./backend/DB_Config/db');
const { errorHandler } = require('./backend/Middlewares/errorMiddleware');
const userRoutes = require('./backend/Routes/userRoutes');
const next = require('next');
const nextServer = next({ dev: process.env.NODE_ENV !== 'production' });

dotenv.config();
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
