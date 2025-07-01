import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberServive {
  private readonly memberModel;

  //pascalcase
  constructor() {
    this.memberModel = MemberModel;
  }
  //interface
  public async processSignup(input: MemberInput): Promise<Member> {
    //processSignup async methodini unga INPUT nomli bitta parametrni yozyapsiz va async methodi bo'lganligi uchun PROMISEda javob berib MEMBERNI qaytaradi
    const exist = await this.memberModel
      //member skima Model ni findOne static methodini chaqiryapmiz unga bitta qiymatda objectini argument sifatida beryapmiz hamda ketidan exacution qilib natijani kutib constanta exist ga tenglayapmiz
      .findOne({
        memberType: MemberType.RESTAURANT,
      })
      .exec();
    console.log("exist", exist);
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    try {
      const tempResult = new this.memberModel(input);
      const result = await tempResult.save();

      result.memberPassword = "";
      //password frontendga bormasligi uchun unga qiymat bermayapmiz, shunchaki bo'sh string qaytaryapmiz
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      //skima model

      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
        //bizga mahfiy bolgan malumotlarni database dan chaqirib olish mehanizmi
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NNICK);

    const isMatch = input.memberPassword === member.memberPassword;
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findOne(member._id).exec();
  }
}

export default MemberServive;

//STATIC METHODLAR faqat CLASS lar bilan ishlaydi

//MemberSchemaModelimiz boladi + unga static methodlar qo'shilad + natija QUERY bo'ladi exect(), select()

//this.MemberModel.find().limit(5).sort().exec()
//this.MemberModel - MemberSchemaModelimiz + find() > QUERY + limit(5) > QUERY + exec() > data bo'ladi
