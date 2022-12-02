import { IUser } from "@/domain/user/user.interface";
import { Document, model, Schema } from "mongoose";
import { UserRole } from "@/domain/user/user.enum";

const userSchema: Schema = new Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.User,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model<IUser & Document>("User", userSchema);
