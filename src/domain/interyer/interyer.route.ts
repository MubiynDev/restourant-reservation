import { Router } from "express";
import InteryerController from "./interyer.controller";

class InteryerRoute {
  public path = `/interyer`;
  public interyerController = new InteryerController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.interyerController.renderInteryerPage);
  }
}

export default InteryerRoute;
