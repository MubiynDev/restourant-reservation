import { Router } from "express";
import UserController from "@/domain/user/user.controller";
import { authmiddleware } from "@/middlewares/auth.middleware";

class UserRoute {
  public path = "/admin";
  public userController = new UserController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes()  {
       this.router.get(`${this.path}`,authmiddleware, this.userController.getAll);
       this.router.get(`${this.path}/register`, this.userController.renderRegister);
       this.router.get(`${this.path}/signin`, this.userController.renderSignin)
       this.router.post(`${this.path}/register`, this.userController.register);
       this.router.post(`${this.path}/signin`, this.userController.login);
       this.router.get(`${this.path}/logout`, this.userController.logout);
       this.router.post(`${this.path}/create`,authmiddleware, this.userController.createReservation);
       this.router.post(`${this.path}/update/:id`,authmiddleware, this.userController.updateReservation);
       this.router.get(`${this.path}/delete/:id`,authmiddleware, this.userController.deleteReservation)




  };
}

export default UserRoute;
