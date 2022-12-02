import {config} from "dotenv";
import path from "path";
config({ path: path.resolve(__dirname, "../../", ".env") });

export const { MONGO_URI, JWT_SECRET, PASSWORD_EMAIL, USER_EMAIL} = process.env;


