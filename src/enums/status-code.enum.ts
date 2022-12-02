enum StatusCode {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ConflictError = 409,
    ValidationError = 422,
    ServerError = 500,
}

export default StatusCode
