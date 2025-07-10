import Errors, { HttpCode } from "../libs/Errors";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";

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
      console.log("nima hato bolyapti");
      console.error("Error, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default Productservice;
