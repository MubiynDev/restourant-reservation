import { Router } from "express";
import HomeController from "./home.controller";

class HomeRoute {
  public path = `/`;
  public HomeController = new HomeController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.HomeController.renderHomePage);
  }
}

export default HomeRoute;
