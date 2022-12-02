import {UserRole} from "@/domain/user/user.enum";

export interface IUser {
    _id: string;
    username: string;
    password: string;
    role: UserRole
}