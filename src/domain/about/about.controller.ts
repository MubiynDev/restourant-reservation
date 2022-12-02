import { NextFunction, Request, Response } from "express";

class AboutController {
    public renderAboutPage = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.render('about', {title: 'Haqqimizda'})

        } catch (error) {
            next(error)
        }
    }
}

export default AboutController;