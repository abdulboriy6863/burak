import { Request, Response } from "express"; //?????

import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

const memberService = new MemberService();
//MemberService MODELdan instins olib yangi object hosil qilaypsmiz

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    /**TRY ning vazifasi => agarda mantiqlar ko'p bo'lib bror qatorda hatolik yuz bersa u o'sha yerda toxtedi va keyingi qatorga otmaydi. U hatolik esa errorga yetib keladi */
    console.log("goHome");
    res.render("home");
    //send || json || redirect || end || render
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
    //typeof res => send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

//define
restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  //restaurantController degan objectimizni processSignup degan async methodiga 2ta parametr beramiz
  try {
    //Shuyergacha behato kirib keladi va 50 chi qatordan 58 chi qatorgacha qanaqadur hatolik vujudga kelsa TRY uni ushlab olib CATCH ga beradi
    console.log("processSignup"); // log qilishimizni sababi => requestimiz backandga kirib keladimi yana bu (loging standarti)

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    //nima uchun memeber type ni RESTAURANT deb belgiladik? Sababi agar biz bunday belgilamaganimizda u bydefault USER deb ketardi

    const result = await memberService.processSignup(newMember);
    //memberService objectni processSignup methodiga newMemberni argument sifatida pass qilyapmis undan kelgan natijani kutib RESULT deb nomlangan variablega tenglayapmiz

    //TODO: SESSION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processSignup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  //restaurantController objectini async processLogin methodini hosil qilyapmiz
  //uni ikta parametri bor req va res

  try {
    // try catch dan foydalanyapmiz agarda malumotlarimda qanaqadur hatolik faydo boladigon bolsa serverni crash qilmasdan uni catch da ushlab olyapmiz
    console.log("processLogin");
    //qayerda turganimizni bilish uchun
    console.log("body:", req.body);
    //req bodiydan kelayotgan malumotlarni korish uchun
    const input: LoginInput = req.body;
    //req.bodydan kelayotgan malumotlarni  constanta inputga tenglayapmiz hamda type ni loging input qilib belgiladik

    // const memberService = new MemberService();
    //member servis classidan memberservis  INSTINSINI hosil qildik
    //MemberService moduledan hosil qilgan objectimizni processLogin methodiga argument sifatida inputni pass qilaymiz
    const result = await memberService.processLogin(input);
    //memberService objectini processLogin methodi orqali argument sifatida inputni pass qilib uni Call qilyapmiz va natijani kuttirib constanta resultga teglayapmiz

    //TODO: SESSION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
    //return qilingan malumotni shu yerda qabul qildik va uni res.send orqali uni frontendga jonatyapmiz
  } catch (err) {
    console.log("Error, processLogin", err);
    res.send(err);
  }
};

//-------------

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  //restaurantController objectini async processLogin methodini hosil qilyapmiz
  //uni ikta parametri bor req va res

  try {
    // try catch dan foydalanyapmiz agarda malumotlarimda qanaqadur hatolik faydo boladigon bolsa serverni crash qilmasdan uni catch da ushlab olyapmiz
    console.log("checkAuthSession");
    //qayerda turganimizni bilish uchun
    if (req.session?.member)
      res.send(
        `<script> alert ("${req.session.member.memberNick}")</script>, `
      );
    else res.send(`<script> alert ("${Message.NOT_AUTHENTICATED}")</script>`);

    //return qilingan malumotni shu yerda qabul qildik va uni res.send orqali uni frontendga jonatyapmiz
  } catch (err) {
    console.log("Error, checkAuthSession", err);
    res.send(err);
  }
};

export default restaurantController;

//request => frontenddan kelayatogan requestimiz
//response => backenddan chiqib ketayotgan responsimiz
