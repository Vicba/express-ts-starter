export type ReponseError = {
  message: string;
  stack: string | null;
};

class ResponseError extends Error {
  status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.status = status;
  }
}

export default ResponseError;
