import { connect } from "mongoose";
import { MONGO_URI } from "@config";
import path from "path";
import express, { Request, Response, NextFunction } from "express";
import { IRoute } from "@/interfaces/route.interface";
// import "reflect-metadata";
import cors from "cors"
import { errorResponder } from "./middlewares/error.middleware";
import StatusCode from "./enums/status-code.enum";
import cookieParser from "cookie-parser";

class App {
  private app: express.Application;
  private port: number;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.port = 4000;

    this.initializeMiddlewares();
    this.initializeSettings()
    this.initializeRoutes(routes);
    this.connectToDatabase();
    this.initializeErrorHandling();
  }

  private async connectToDatabase() {
    await connect(MONGO_URI);

    console.log(`=====================================`);
    console.log(`🚀 Connected to Database`);
    console.log(`=====================================`);
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(cookieParser())
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));
  }

  private initializeSettings() {
    this.app.set('view engine', 'ejs');
    this.app.set("views", path.join(__dirname, "views"))

  }

  private initializeRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
      this.app.get("*", ( req: Request, res: Response ) => {
        res.status(StatusCode.NotFound).render('404', {title: 'Not Found'})
    })
  }

  

  private initializeErrorHandling() {
    this.app.use(errorResponder);
  }




  public run() {
    this.app.listen(this.port, () => {
      console.log(`=====================================`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=====================================`);
    });

  }
}

export default App;
