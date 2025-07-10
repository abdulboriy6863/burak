import Errors, { HttpCode } from "../libs/Errors";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/Errors";
import {
  Product,
  ProductInput,
  ProducUpdatetInput,
} from "../libs/types/product";
import { shapeIntoMongooseObjectId } from "../libs/config";

class Productservice {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /* SPA */

  /* SSR */

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("Error, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProducUpdatetInput
  ): Promise<Product> {
    // stringni object id da o'zgartiramiz
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    console.log("result", result);
    return result;
  }
}

export default Productservice;
