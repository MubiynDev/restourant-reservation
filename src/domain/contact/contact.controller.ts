import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import { ContactDto } from "./dto/contact.dto";
import nodemailer from 'nodemailer'
import { PASSWORD_EMAIL, USER_EMAIL } from "@/config";
import BadRequestError from "@/errors/bad-request.error";
import StatusCode from "@/enums/status-code.enum";
import ErrorCode from "@/enums/error-code.enum";

class ContactController {
    public renderContactPage = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.render('contact', {title: 'Elaqe'})

        } catch (error) {
            next(error)
        }
    }

    public sendMail = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: ContactDto = req.body;
            await validation(ContactDto, data)

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                 auth: {
                    user: USER_EMAIL,
                    pass: PASSWORD_EMAIL
                 }

            })

            const mailOptions = {
                from: data.email,
                to: USER_EMAIL,
                phone: data.phone,
                message: data.message
            }

            transporter.sendMail(mailOptions, (err) => {
                if(err) throw new BadRequestError(ErrorCode.ErrorSendingContactData)
            })

            res.status(StatusCode.Ok).render('contact', {title: 'Elaqe', message: 'message send'})


        } catch (error) {
            next(error)
        }
    }
}

export default ContactController;