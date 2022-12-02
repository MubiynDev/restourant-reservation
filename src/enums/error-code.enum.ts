enum ErrorCode {
  UserAlreadyExits = "USER_ALREADY_EXISTS",
  ReservationAlreadyExists = "RESERVATION_ALREADY_EXISTS",
  ValidationError = "VALIDATION_ERROR",
  ServerError = "INTERNAL_SERVER_ERROR",
  ReservationNotFound = "RESERVATION_NOT_FOUND",
  TableNotFound = "TABLE_NOT_FOUND",
  DateIsWrong = "DATE_MUST_BE_IN_FUTURE",
  UserNotFound = "USER_NOT_FOUND",
  IncorrectPassword = "INCORRECT_PASSWORD",
  YearIsWrong = "YEAR_IS_WRONG",
  MonthIsWrong = "MONTH_IS_WRONG",
  DayIsWrong = "DAY_IS_WRONG",
  PayloadNotFound = "PAYLOAD_NOT_FOUND",
  AuthorizationRequired = "AUTHORIZATION_REQUIRED",
  ErrorSendingContactData = "ERROR_SENDING_CONTACT_DATA",
  SomethingWentWrong = "SOMETHING_WENT_WRONG",
  AccessDenied = "ACCESS_DENIED"
  



}

export default ErrorCode;
