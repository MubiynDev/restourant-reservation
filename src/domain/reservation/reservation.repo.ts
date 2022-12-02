import { CreateReservationDto, ReservationDto } from "./dto/reservation.dto";
import { reservationModel } from "./reservation.model";


class ReservationRepo {
    private reservationModel: typeof reservationModel

    constructor() {
        this.reservationModel = reservationModel
    }

    create = async (data: CreateReservationDto): Promise<ReservationDto> => {
    
        return this.reservationModel.create(data);
      };
    
    getAll = async (): Promise<ReservationDto[]> => {
        return this.reservationModel.find().lean()
    }
      
    getById = async (id: string): Promise<ReservationDto> => {
        return this.reservationModel.findById(id)
    }

    getByDate = async (date: string): Promise<ReservationDto[]> => {
        console.log(date)
        return this.reservationModel.aggregate([
            {
                $match: {
                    date: date
                }
            }
        ])
    }
    
    getForChecking = async (data:   CreateReservationDto): Promise<ReservationDto> => {
        return this.reservationModel.findOne({date: data.date, table_number: data.table_number})
    }

    deleteById = async (id: string): Promise<ReservationDto> => {
        return this.reservationModel.findByIdAndDelete(id)
    }

    update = async (id: string, data: Partial<CreateReservationDto>): Promise<ReservationDto> => {
        return this.reservationModel.findByIdAndUpdate(id, data, {new: true})
    }
}
export default ReservationRepo;