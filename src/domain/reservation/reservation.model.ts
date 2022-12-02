import { Document, model, Schema } from "mongoose";
import { IReservation } from "./reservation.interface";

const reservationSchema: Schema = new Schema(
    {
      firstName: {
        required: true,
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
      date: {
        required: true,
        type: String,  
      },
      people: {
          required: true,
          type: String,
        },
      table_number: {
          required: true,
          type: String,
        },
    },
    {
      timestamps: true,
    }
  );
  
  export const reservationModel = model<IReservation & Document>("Reservation", reservationSchema);
  