import { NextFunction, Request, Response } from "express";

class HomeController {
    public renderHomePage = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.render('index', {title: 'Ana Sehife'})

        } catch (error) {
            next(error)
        }
    }
}

export default HomeController;