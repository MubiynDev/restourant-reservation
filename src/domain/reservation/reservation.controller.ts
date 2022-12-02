import { DateDto } from "@/dtos/date.dto";
import { IdDto } from "@/dtos/id.dto";
import ErrorCode from "@/enums/error-code.enum";
import StatusCode from "@/enums/status-code.enum";
import NotFoundError from "@/errors/not-found.error";
import { IRequest } from "@/interfaces/request.interface";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import { ReservationDto, CreateReservationDto } from "./dto/reservation.dto";
import ReservationService from "./reservation.service";


class ReservationController {
    public reservationService = new ReservationService()

    public create = async (req: IRequest, res: Response, next: NextFunction) => {
        try {

            const createData: CreateReservationDto = req.body;
            const { date } = createData;

            await validation(CreateReservationDto, createData);
            await validation(DateDto, { date } )


            const result = await this.reservationService.create(createData);
            res.status(StatusCode.Created).render('reservation', {

                title: 'Rezervasiya',
                data: result,
                user: req.user,
                message: "Reservation added"
            })

        } catch(error) {
            console.log(error)
            next(error)
        }
    }

    public getAll = async (req: IRequest, res: Response, next: NextFunction) => {
        try {
          const result = await this.reservationService.getAll();
          res.status(StatusCode.Ok).render('reservation', {

            title: 'Rezervasiya',
            data: result,
            user: req.user,
        })
        } catch (error) {
          next(error);
        }
      };

      public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;       
            const result = await this.reservationService.getById(id);
          res.status(StatusCode.Ok).json({
            data: result,
          });
        } catch (error) {
          next(error);
        }
      };

      public getByDate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const date: string = req.body.date; 
              
            if(!date) throw new NotFoundError(ErrorCode.DateIsWrong)

            await validation(DateDto,  { date } )

            const result = await this.reservationService.getByDate(date);

          res.status(StatusCode.Ok).render('reservation', {

                title: 'Rezervasiya',
                data: result,
            })
        } catch (error) {
          next(error);
        }
      };

      public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;
          const updateData: Partial<ReservationDto> = req.body;
    
          await validation(ReservationDto, updateData, true);
          await validation(IdDto, { id });
    
          const result = await this.reservationService.update(id, updateData);
    
          res.status(StatusCode.Created).render('reservation', {

            title: 'Rezervasiya',
            data: result,
            message: "Reservation updated"
        })
        } catch (error) {
          next(error);
        }
      };

      public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;
          await validation(IdDto, { id });

          const result = await this.reservationService.deleteById(id);
    
          res.status(StatusCode.Ok).json({
            data: result,
          });
        } catch (error) {
          next(error);
        }
      };

      
}

export default ReservationController;