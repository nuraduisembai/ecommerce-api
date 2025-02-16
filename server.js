const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // <-- Импорт маршрутов
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

require('dotenv').config();
connectDB();

const app = express();
app.use(express.json());

// Подключение маршрутов
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
