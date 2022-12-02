import { JWT_SECRET } from "@/config";
import { UserRole } from "@/domain/user/user.enum";
import { userModel } from "@/domain/user/user.model";
import ErrorCode from "@/enums/error-code.enum";
import StatusCode from "@/enums/status-code.enum";
import UnautorizedError from "@/errors/unauth-error";
import { IRequest } from "@/interfaces/request.interface";
import { verifyToken } from "@/utils/generateToken";
import { NextFunction, Response } from "express";


export const authmiddleware =  async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token
        const tokenPayload = await verifyToken(token, JWT_SECRET);

         if(!tokenPayload) {

             res.status(StatusCode.Unauthorized).redirect("/admin/signin");
             return;

   
            }

        const user = await userModel.findById(tokenPayload._id)

        if(user.role !== UserRole.Admin) throw new UnautorizedError(ErrorCode.AccessDenied, ErrorCode.AccessDenied)

         req.user = user;
         next()
    
    } catch(error) {
        next(error)
    }
}