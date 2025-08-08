import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";

/* MEMBER */
router.post("/member/login", memberController.login);

router.post("/member/signup", memberController.signup);

router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);

router.get(
  "/member/details",
  memberController.verifyAuth,
  memberController.getMemberDetail
);

/* PRODUCT */

/* ORDER */

// router.get("/", memberController.goHome);

// router.get("/login", memberController.getLogin);

// router.get("/signup", memberController.getSignup);

export default router;
