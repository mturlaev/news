const express = require ('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require("./routes/news.route"))
app.use(require("./routes/categories.route"));
app.use(require("./routes/commits.route"));



mongoose.connect("mongodb+srv://mturlaev:1221@cluster0.gt26rfa.mongodb.net/news?retryWrites=true&w=majority").then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(5000, () => {
    console.log("Сервер запущен");
  });