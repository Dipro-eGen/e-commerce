import {prop} from "@rxweb/reactive-form-validators";

export class ProductDto{

  @prop()
  id: string;

  @prop()
  productName: string;

  @prop()
  imageUrl: string;

  @prop()
  price: number;

  @prop()
  brand: string;

  @prop()
  description: string;

  public constructor(o?: Partial<ProductDto>) {
    Object.assign(this, o);
  }

}
