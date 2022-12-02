import { Router } from "express";
import MenuController from "./menu.controller";

class MenuRoute {
  public path = `/menyu`;
  public menuController = new MenuController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.menuController.renderMenuPage);
  }
}

export default MenuRoute;
