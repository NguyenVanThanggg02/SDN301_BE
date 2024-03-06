//Sử dụng module 'express' để khởi tại 1 web server
import cors from "cors";
import * as dotenv from 'dotenv';
import express, { json } from "express";

import connectDB from "./database.js";
import { cateRouter, commentRouter, imageRouter, productRouter, userRouter } from "./routes/index.js";
dotenv.config();
//Tạo 1 constant 'app'
const app = express();
//Thêm middleware kiểm soát dữ liệu của Request
app.use(json());
app.use(cors());

//Kích hoạt router hoạt động định tuyến cho các request của client
app.get('/', (req, res) => {
    res.send("<h1>Welcom to</h1>")
})

app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/category', cateRouter)
app.use('/image', imageRouter)
app.use('/comment', commentRouter)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const Port = process.env.PORT || 9999

//Lắng nghe các request gửi tới web server tại port

app.listen(Port, async () => {
    connectDB();
    console.log(`web server running on http://localhost:${Port}`);
})