import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
/* 1-ENTRANCE*/ // KIRISH QISMIDA NIMA QILINADI??
const app = express(); //OBJECT
//expressni exacution (qurish) natijasida app objectini qo'lga kirityapmiz. Bu object bilan nima qilyapmiz? BACKEND SERVERini quryapmiz

app.use(express.static(path.join(__dirname, "public"))); //MiddlaWere DP => Public folderini frontendga ochiqlayapti

app.use(express.urlencoded({ extended: true })); //MiddlaWere DP => TRADITIONAL API lar uchun  hizmat qiladi

app.use(express.json()); //MiddlaWere DP => REST API lar uchun hizmat qiladi
//backend bilan fronted orasida sof holatda json formatdagi malumotlarni oldi berdi qiladi.

app.use(morgan(MORGAN_FORMAT)); //MiddlaWere DP => Loging jarayonini tashkillashtirib beradi
/* 2-SESSIONS*/

/* 3-VIEWS*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* 4-ROUTERS*/
// TEPADA QILINGAN BARCHA ISHLARIMIZ ROUTERLAR UCHUH QILINYAPTI
//ROUTERLAR nima? ROUTERLAR API lar to'plami
app.use("/admin", routerAdmin); // SSR: EJS

app.use("/", router); // SPA: REACT => Frontend ni Frontend da qurish
// middleware design pattern
//Burak backend serverni REACT loyihamizga (rest api ) server sifatida ishlatamiz

export default app;

//BSSR = Traditional API + Rest API orqali boladi
//SPA = Rest API orqali bo'ladi

//USE methodi doyim MIDDLAWERE DP lari uchun ishlaydi
