import UserService from "@/domain/user/user.service";
import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@/domain/user/dto/user.dto";
import { validation } from "@/utils/validation";
import StatusCode from "@/enums/status-code.enum";
import ReservationService from "../reservation/reservation.service";
import { IRequest } from "@/interfaces/request.interface";
import { CreateReservationDto, ReservationDto } from "../reservation/dto/reservation.dto";
import { DateDto } from "@/dtos/date.dto";
import { IdDto } from "@/dtos/id.dto";

class UserController {
  public userService = new UserService();
  public reservationService = new ReservationService()

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateUserDto = req.body;

      await validation(CreateUserDto, data);

      await this.userService.register(data);

      const token = await this.userService.login(data)


      res.status(StatusCode.Created).cookie("token", token).redirect('/admin/signin');
    } catch (error) {
      next(error);
    }
  };

  public createReservation = async (req: IRequest, res: Response, next: NextFunction) => {
    try {

        const createData: CreateReservationDto = req.body;
        const { date } = createData;

        await validation(CreateReservationDto, createData);
        await validation(DateDto, { date } )


        await this.reservationService.create(createData);
        
        const result = await this.reservationService.getAll();

        res.status(StatusCode.Created).render('dashboard', {

            title: 'Admin-panel',
            data: result,
            user: req.user,
            message: "Reservation added"
        })

    } catch(error) {
        console.log(error)
        next(error)
    }
};

public updateReservation = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const updateData: Partial<ReservationDto> = req.body;

    await validation(ReservationDto, updateData, true);
    await validation(IdDto, { id });

    await this.reservationService.update(id, updateData);

    const result = await this.reservationService.getAll();


    res.status(StatusCode.Ok).render('dashboard', {

      title: 'Rezervasiya',
      data: result,
      message: "Reservation updated",
      user: req.user
  })
  } catch (error) {
    next(error);
  }
};

public deleteReservation = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;

    await validation(IdDto, { id });

    const result = await this.reservationService.deleteById(id);

    res.status(StatusCode.Ok).json({
      ok: true,
      data: result
    })
  } catch (error) {
    next(error);
  }
};



  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateUserDto = req.body;

      await validation(CreateUserDto, data);
 
      const token = await this.userService.login(data)

      res.cookie("token", token).redirect("/admin")

    } catch (error) {
      console.log(error)
      next(error);
    }
  };

  public logout = async (req: Request, res: Response, next: NextFunction) => {
    try {

      res.clearCookie("token").redirect("/")

    } catch (error) {
      console.log(error)
      next(error);
    }
  };

  public getAll = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
       const result = await this.reservationService.getAll();

        res.render('dashboard', {
          title: 'Admin-panel',
          data: result,
          user: req.user
        })

    } catch (error) {
        next(error)
    }
};

public renderSignin = async (req: Request, res: Response, next: NextFunction) => {
  try {

      res.render('signin', {title: 'Sign-in'})

  } catch (error) {
      next(error)
  }
};

public renderRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {

      res.render('register', {title: 'Register'})

  } catch (error) {
      next(error)
  }
}



}

export default UserController;
