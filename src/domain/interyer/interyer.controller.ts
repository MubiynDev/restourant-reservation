import { NextFunction, Request, Response } from "express";

class InteryerController {
    public renderInteryerPage = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.render('interyer', {title: 'Interyer'})

        } catch (error) {
            next(error)
        }
    }
}

export default InteryerController;