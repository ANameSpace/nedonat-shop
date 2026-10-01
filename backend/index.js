import express from 'express';

const app = express();
const PORT = 5000;

app.get('/api/test', (req, res) => {
  res.json({ message: "Привет с бэкенда!" });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

const gracefulShutdown = () => {
  console.log('Получен сигнал остановки. Закрываем сервер...');
  
  process.exit(0);
  //pool.end(() => {
    //console.log('Подключение к PostgreSQL успешно закрыто.');
    //process.exit(0);
  //});
};

// Слушаем события нажатия Ctrl+C в терминале
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

