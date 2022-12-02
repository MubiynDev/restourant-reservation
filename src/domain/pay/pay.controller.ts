import { NextFunction, Request, Response } from "express";

class PayController {
    public renderPayPage = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.render('pay', {title: 'Odenis'})

        } catch (error) {
            next(error)
        }
    }
}

export default PayController;