import UserRepo from "@/domain/user/user.repo";
import { CreateUserDto, UserDto } from "@/domain/user/dto/user.dto";
import ErrorCode from "@enums/error-code.enum";
import BadRequestError from "@errors/bad-request.error";
import bcrypt from 'bcrypt'
import NotFoundError from "@/errors/not-found.error";
import { createToken } from "@/utils/generateToken";
import { JWT_SECRET } from "@/config";
import { IPayload } from "@/interfaces/payload.interface";

class UserService {
  public userRepo = new UserRepo();

  public register = async (data: CreateUserDto): Promise<string | Error> => {
    const user = await this.userRepo.getByUsername(data.username);
    if (user) throw new BadRequestError(ErrorCode.UserAlreadyExits);

    const hash = await bcrypt.hash(data.password, 10)


    const newUser = await this.userRepo.create({
      username: data.username,
      password: hash

    });

    const payload: IPayload = {
      _id: newUser._id,
      username: newUser.username
    }
    return createToken(payload, JWT_SECRET)
    
  };

  public login = async (data: CreateUserDto)  => {
    const user = await this.userRepo.getByUsername(data.username);
    if (!user) throw new BadRequestError(ErrorCode.UserNotFound, ErrorCode.UserNotFound);

    const isPasswordTrue = await bcrypt.compare(data.password, user.password)
    if(!isPasswordTrue) throw new BadRequestError(ErrorCode.IncorrectPassword, ErrorCode.IncorrectPassword)

    const payload: IPayload = {
      _id: user._id,
      username: user.username
    }
    return createToken(payload, JWT_SECRET)

    
  };

  public getById = async (id: string):Promise<UserDto>  => {
    const user = await this.userRepo.getById(id)
    if(!user) throw new NotFoundError(ErrorCode.UserNotFound, ErrorCode.UserNotFound)
    return user;
  };

  public getByUsername = async (username: string):Promise<UserDto>  => {
    const user = await this.userRepo.getById(username)
    if(!user) throw new NotFoundError(ErrorCode.UserNotFound, ErrorCode.UserNotFound)
    return user;
 };
}

export default UserService;
