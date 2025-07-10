import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import Productservice from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

const productService = new Productservice();

const productController: T = {};

/* SPA */

/* SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts"); // log qilishimizni sababi => requestimiz backandga kirib keladimi yana bu (loging standarti)
    //STEP 6

    res.render("products");
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct"); // log qilishimizni sababi => requestimiz backandga kirib keladimi yana bu (loging standarti)

    // console.log("req.files", req.files);

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });

    await productService.createNewProduct(data);
    //shuyer
    res.send(
      `<script> alert ("Sucessful creation!") window.location.replace('/admin/product/all')</script>,`
    );
  } catch (err) {
    console.log("Error, createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    //messageyimzni qiymati biz hosil qilgan class dagi errorga dahildor bolsa unda bizni hatoligimzni olib ber aksxolda umimiy hatolikdan something went wrongni olib ber
    res.send(
      `<script> alert ("${message}") window.location.replace('/admin/product/all')</script>,`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct"); // log qilishimizni sababi => requestimiz backandga kirib keladimi yana bu (loging standarti)
    const id = req.params.id;
    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
