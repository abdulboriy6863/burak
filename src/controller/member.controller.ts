import { Request, Response } from "express";

import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

//REACT loyiha uchun

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

//define
memberController.signup = async (req: Request, res: Response) => {
  //restaurantController degan objectimizni processSignup degan async methodiga 2ta parametr beramiz
  try {
    //Shuyergacha behato kirib keladi va 50 chi qatordan 58 chi qatorgacha qanaqadur hatolik vujudga kelsa TRY uni ushlab olib CATCH ga beradi
    console.log("signup"); // log qilishimizni sababi => requestimiz backandga kirib keladimi yana bu (loging standarti)

    const input: MemberInput = req.body,
      //MemberService MODELdan instins olib yangi object hosil qilaypsmiz
      //TODO: TOKENS AUTHENTICATION

      result: Member = await memberService.signup(input);
    //memberService objectni processSignup methodiga newMemberni argument sifatida pass qilyapmis undan kelgan natijani kutib RESULT deb nomlangan variablega tenglayapmiz
    const token = await authService.createToken(result);
    console.log("token:::", token);

    res.json({ member: result });
  } catch (err) {
    console.log("Error, signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    console.log("body:", req.body);
    const input: LoginInput = req.body,
      //MemberService moduledan hosil qilgan objectimizni processLogin methodiga argument sifatida inputni pass qilaymiz
      result = await memberService.login(input),
      token = await authService.createToken(result);
    console.log("token:::", token);
    //TODO: TOKENS AUTHENTICATION

    res.json({ member: result });
  } catch (err) {
    console.log("Error, login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
