import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controller/restaurant.controller";

/**Restaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
//router objectini post degan methdodini call qilyapmiz va ikta argumentni pass qildik birinchichi URL yani LOGIN degan urlga kelganda restaurantController objectini processLogin degan methodini call qilyapmiz

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
//
//URLimiz SIGNUP methodimiz POST manashu 2ta shart bajarilsa restaurantController objectimizni processSignup methodiga jonatadi
/**Product */
/**User */
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

export default routerAdmin;

//BURAK ADMINKAsini loyihasini APIlarini hammasi shu yerdan o'tadi

//GET methodi loging page ga yuboradi
/*POST methodi get pageni ichidagi qiladigon ishlarimizni boshqaradi
malumotlarni mutation qilish uchun
*/
