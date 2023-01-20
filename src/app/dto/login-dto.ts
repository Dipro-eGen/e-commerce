import {prop} from "@rxweb/reactive-form-validators";

export class LoginDto{

  @prop()
  email: string;

  @prop()
  password: string;



  public constructor(o?: Partial<LoginDto>) {
    Object.assign(this, o);
  }

}
