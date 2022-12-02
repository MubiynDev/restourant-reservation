import { NextFunction, Request, Response } from "express";

class MenuController {
    public renderMenuPage = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.render('menu', {title: 'Menyu'})

        } catch (error) {
            next(error)
        }
    }
}

export default MenuController;