🛒 E-Commerce API (MongoDB + Express + Node.js)
📌 Описание
Этот проект представляет собой RESTful API для управления пользователями, товарами и заказами с использованием Node.js, Express и MongoDB.

🚀 Функционал
✔ Регистрация и аутентификация пользователей (JWT)
✔ CRUD-операции для товаров
✔ Создание и просмотр заказов
✔ Защищенные маршруты с токенами
✔ Поддержка MongoDB Atlas и деплой на Render

🔧 1️⃣ Установка
1.1. Клонирование репозитория
git clone https://github.com/your-repo/ecommerce-api.git
cd ecommerce-api

1.2. Установка зависимостей
npm install

1.3. Создание файла .env
Создай .env в корне и заполни:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

1.4. Запуск сервера
npm start
Сервер запустится на http://localhost:5000.


🌍 2️⃣ Деплой на Render
2.1. Создание репозитория
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-repo/ecommerce-api.git
git push -u origin main
2.2. Деплой на Render
Зарегистрируйся на Render
Создай New Web Service
Выбери свой GitHub репозиторий
Добавь переменные окружения (.env)
Выбери Node.js, npm start
Deploy 🚀
🔗 Твой API будет доступен по https://your-app.onrender.com.

🔌 3️⃣ API Эндпоинты
3.1. 📌 Аутентификация
🔹 Регистрация пользователя
POST /api/users/register
Пример запроса:
{
  "name": "Иван",
  "email": "ivan@example.com",
  "password": "123456"
}

Ответ:
{
  "_id": "6523a7...",
  "name": "Иван",
  "email": "ivan@example.com",
  "role": "user"
}

🔹 Логин
POST /api/users/login
Пример запроса:
{
  "email": "ivan@example.com",
  "password": "123456"
}
Ответ:
{
  "token": "eyJhbGciOi...",
  "user": {
    "_id": "6523a7...",
    "name": "Иван",
    "email": "ivan@example.com"
  }
}

⚠ Важное: Для всех защищенных маршрутов добавляй токен в заголовок:
Authorization: Bearer <your_token>

3.2. 🛍️ Товары
🔹 Добавить товар
POST /api/products
Требуется токен
Пример запроса:
{
  "name": "Ноутбук",
  "price": 800,
  "description": "Игровой ноутбук",
  "category": "Электроника",
  "stock": 5
}
Ответ:
{
  "_id": "6523a8...",
  "name": "Ноутбук",
  "price": 800,
  "category": "Электроника"
}

🔹 Получить список товаров
GET /api/products
Ответ:
[
  {
    "_id": "6523a8...",
    "name": "Ноутбук",
    "price": 800,
    "category": "Электроника"
  }
]

3.3. 📦 Заказы
🔹 Создать заказ
POST /api/orders

Требуется токен
Пример запроса:
{
  "products": ["6523a8...", "6523a9..."]
}

Ответ:
{
  "_id": "6523b0...",
  "user": "6523a7...",
  "products": ["6523a8...", "6523a9..."],
  "status": "Pending"
}

🔹 Получить заказы пользователя
GET /api/orders

Ответ:
[
  {
    "_id": "6523b0...",
    "products": [
      {
        "_id": "6523a8...",
        "name": "Ноутбук"
      }
    ],
    "status": "Pending"
  }
]
🛠 4️⃣ Дополнительные функции
🔹 Валидация данных
Используем Joi или Mongoose валидацию:
npm install joi
Пример валидации в controllers/userController.js:
const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const { error } = schema.validate(req.body);
if (error) return res.status(400).json({ error: error.details[0].message });

🔹 Хеширование паролей
Пароли хранятся в зашифрованном виде с bcryptjs.

🔹 Безопасность
Используем dotenv для переменных окружения и CORS для ограничения доступа.

🔹 Фильтрация и пагинация
Добавляем ?page=1&limit=10 для постраничного вывода товаров.

📜 5️⃣ Структура проекта
ecommerce-api/
│── models/
│   ├── product.js
│   ├── user.js
│   ├── order.js
│── routes/
│   ├── productRoutes.js
│   ├── userRoutes.js
│   ├── orderRoutes.js
│── controllers/
│   ├── productController.js
│   ├── userController.js
│   ├── orderController.js
│── middleware/
│   ├── authMiddleware.js
│── config/
│   ├── db.js
│── .env
│── server.js
│── package.json
│── README.md

🎯 6️⃣ Итог

✅ Запуск: npm start
✅ API доступно на: http://localhost:5000
✅ Деплой через Render: https://your-app.onrender.com
