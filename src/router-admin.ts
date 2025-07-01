import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controller/restaurant.controller";

/**Restaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
//URLimiz SIGNUP methodimiz POST manashu 2ta shart bajarilsa restaurantController objectimizni processSignup methodiga jonatadi
/**Product */
/**User */

export default routerAdmin;

//BURAK ADMINKAsini loyihasini APIlarini hammasi shu yerdan o'tadi

//GET methodi loging page ga yuboradi
/*POST methodi get pageni ichidagi qiladigon ishlarimizni boshqaradi
malumotlarni mutation qilish uchun
*/
