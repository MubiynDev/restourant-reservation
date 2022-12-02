import { Router } from "express";
import ContactController from "./contact.controller";

class ContactRoute {
  public path = `/contact`;
  public contactController = new ContactController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.contactController.renderContactPage);
    this.router.post(`${this.path}`, this.contactController.sendMail);

  }
}

export default ContactRoute;
