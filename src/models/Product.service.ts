import ProductModel from "../schema/Product.model";

class Productservice {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
}

export default Productservice;
