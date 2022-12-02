import { Router } from "express";
import PayController from "./pay.controller";

class PayRoute {
  public path = `/pay`;
  public payController = new PayController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.payController.renderPayPage);
  }
}

export default PayRoute;
