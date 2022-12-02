import ErrorCode from "@/enums/error-code.enum";
import ConflictError from "@/errors/conflict-error";
import NotFoundError from "@/errors/not-found.error";
import valiadationDate from "@/utils/ValiadationDate";
import { CreateReservationDto, ReservationDto } from "./dto/reservation.dto";
import ReservationRepo from "./reservation.repo";

class ReservationService {
    public reservationRepo = new ReservationRepo()

    public create = async (data: CreateReservationDto): Promise<ReservationDto> => {
         
        await valiadationDate(data.date) 

        const reservation = await this.reservationRepo.getForChecking(data)

        if(reservation) throw new ConflictError(ErrorCode.ReservationAlreadyExists)

        return this.reservationRepo.create(data)
    }

    public getAll = async ():Promise<ReservationDto[]>  => {
        return this.reservationRepo.getAll();
      
    }

    public getById = async (id: string):Promise<ReservationDto>  => {
        const reservation = await this.reservationRepo.getById(id)
        if(!reservation) throw new NotFoundError(ErrorCode.ReservationNotFound)
        return reservation;
    }

    public getByDate = async (date: string):Promise<ReservationDto[]>  => {
      const reservation = await this.reservationRepo.getByDate(date)
      if(!reservation) throw new NotFoundError(ErrorCode.ReservationNotFound)
      return reservation;
  }

    public update = async (
        id: string,
        updateData: Partial<ReservationDto>
      ): Promise<ReservationDto> => {
        const reservation = await this.reservationRepo.getById(id);
        if (!reservation) throw new NotFoundError(ErrorCode.ReservationNotFound);
    
        return this.reservationRepo.update(id, updateData);
      };

    public deleteById = async (id: string): Promise<ReservationDto> => {
        const reservation = await this.reservationRepo.getById(id);
        if (!reservation) throw new NotFoundError(ErrorCode.ReservationNotFound);
    
        return this.reservationRepo.deleteById(id);
       
      };
}

export default ReservationService;