import { ERROR_MESSAGE } from "./Error.Message";

export class NotUpdatedError extends Error {
  constructor() {
      super(ERROR_MESSAGE.NOT_UPDATED);
  }
}