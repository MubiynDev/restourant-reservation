import ErrorCode from '@/enums/error-code.enum';
import UnautorizedError from '@/errors/unauth-error';
import { IPayload } from '@/interfaces/payload.interface';
import jwt, { VerifyErrors } from 'jsonwebtoken';

export const createToken = (payload: IPayload, secret: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, {expiresIn: "1d"}, async (err: Error | null, token: string) => {
            try {
                if(err) return reject(err);

                resolve(token)
            } catch (err) {
                return reject(err);
            }
        })
    })
    
}
 
export const verifyToken = (token: string, secret: string): Promise<IPayload> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err: VerifyErrors | null, tokenPayload: IPayload) => {
            if(err) return reject(new UnautorizedError(ErrorCode.PayloadNotFound, ErrorCode.AuthorizationRequired));


            resolve(tokenPayload)
        })
    })
}