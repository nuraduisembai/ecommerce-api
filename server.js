const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

require('dotenv').config();
connectDB();

const app = express();
app.use(express.json());

// Проверка, загружаются ли маршруты
console.log('✅ Подключение маршрутов...');

// Корневой маршрут (проверка работы сервера)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Подключение маршрутов
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Логирование подключения маршрутов
console.log('✅ /api/products -> подключен');
console.log('✅ /api/users -> подключен');
console.log('✅ /api/orders -> подключен');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
