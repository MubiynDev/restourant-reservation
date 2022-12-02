import ErrorCode from "@enums/error-code.enum";
import StatusCode from "@enums/status-code.enum";
import BaseError from "@errors/base-error";

class ConflictError extends BaseError {
  constructor(name: ErrorCode, message?: string) {
    super(name, StatusCode.ConflictError);

    this.message = message;
  }
}

export default ConflictError;