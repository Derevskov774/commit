import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app=express();
const PORT =3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));
app.use(express.static(join(__dirname,"public")));
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.get("/",(red,res) => {
    res.send("Конференции.РФ");
});


app.get('/views/register', (req, res) => { res.render('register', { title: 'Регистрация' }); }); 
app.get('/views/login', (req, res) => { res.render('login', { title: 'Вход' }); });

app.get('/views/dashboard', (req, res) => {
     res.render('dashboard', { title: 'Мои заявки', user: { 
        fio: 'Иванов Иван' }, requests: [ { 
            room_name: 'Аудитория №1', status: 'Новая' }, { 
                room_name: 'Коворкинг', статус: 'Завершено' } ] }); });












app.listen (PORT,() => {
    console.log(`Сервер:http://localhost:${PORT}`);
});

