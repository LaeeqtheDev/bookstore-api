require('dotenv').config();

const express = require('express');
const connectDB = require('./database/db');
const BookRoutes = require('./routes/book-routes')


const PORT = process.env.PORT || 3000;
const app = express();

// Connect to the database
connectDB();

// Middleware -> express.json()
app.use(express.json());


app.use('/api/books', BookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
