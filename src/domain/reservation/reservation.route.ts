import { Router } from "express";
import ReservationController from "./reservation.controller";

class ReservationRoute {
  public path = `/rezervasiya`;
  public reservationController = new ReservationController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.reservationController.getAll);
    this.router.post(`${this.path}`, this.reservationController.create);

  }
}

export default ReservationRoute;
