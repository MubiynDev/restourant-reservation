import { DateDto } from "@/dtos/date.dto";
import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";

export const  valiadationDate  = async (date: string) => {
  const enteredDate = new Date(date);
  const nowDate = new Date()

  if(enteredDate < nowDate) throw new BadRequestError(ErrorCode.DateIsWrong)
  return
  // const dateNow = new Date()
  // const year = dateNow.getFullYear().toString()
  // const monthNum = dateNow.getMonth() + 1;
  // const month = monthNum.toString()
  // const day = dateNow.getDate().toString();
  
  // const enteredYear = date.split('-')[0];
  // const enteredMonth = date.split('-')[1];
  // const enteredDay = date.split('-')[2];
  
  // if(enteredYear != year) throw new BadRequestError(ErrorCode.YearIsWrong);
  // if(enteredYear === year && enteredMonth < month) throw new BadRequestError(ErrorCode.MonthIsWrong);
  // if(enteredMonth === month && enteredDay < day) throw new BadRequestError(ErrorCode.DayIsWrong)


  return;

}
export default valiadationDate;