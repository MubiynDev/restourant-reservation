import { Router } from "express";
import AboutController from "./about.controller";

class AboutRoute {
  public path = `/haqqimizda`;
  public aboutController = new AboutController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.aboutController.renderAboutPage);
  }
}

export default AboutRoute;
