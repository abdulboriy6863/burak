import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";
import uploader from "./libs/utils/uploader";

/* MEMBER */
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.login);

router.post("/member/signup", memberController.signup);

router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);

router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);

router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);

router.get("/member/top-user", memberController.getTopUsers);

/* PRODUCT */

/* ORDER */

// router.get("/", memberController.goHome);

// router.get("/login", memberController.getLogin);

// router.get("/signup", memberController.getSignup);

export default router;
