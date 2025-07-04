import { Request, Response } from "express";

import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();
//MemberService MODELdan instins olib yangi object hosil qilaypsmiz

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    /**TRY ning vazifasi => agarda mantiqlar ko'p bo'lib bror qatorda hatolik yuz bersa u o'sha yerda toxtedi va keyingi qatorga otmaydi. U hatolik esa errorga yetib keladi */
    console.log("goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
    //typeof res => send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

//define
restaurantController.processSignup = async (req: Request, res: Response) => {
  //restaurantController degan objectimizni processSignup degan async methodiga 2ta parametr beramiz
  try {
    //Shuyergacha behato kirib keladi va 50 chi qatordan 58 chi qatorgacha qanaqadur hatolik vujudga kelsa TRY uni ushlab olib CATCH ga beradi
    console.log("processSignup"); // log qilishimizni sababi => requestimiz backandga kirib keladimi yana bu (loging standarti)

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    //nima uchun memeber type ni RESTAURANT deb belgiladik? Sababi agar biz bunday belgilamaganimizda u bydefault USER deb ketardi

    const result = await memberService.processSignup(newMember);
    //memberService objectni processSignup methodiga newMemberni argument sifatida pass qilyapmis undan kelgan natijani kutib RESULT deb nomlangan variablega tenglayapmiz
    //TODO: TOKENS

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    //TODO: TOKENS

    // const memberService = new MemberService();
    //MemberService moduledan hosil qilgan objectimizni processLogin methodiga argument sifatida inputni pass qilaymiz
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin", err);
    res.send(err);
  }
};

export default restaurantController;

//request => frontenddan kelayatogan requestimiz
//response => backenddan chiqib ketayotgan responsimiz
