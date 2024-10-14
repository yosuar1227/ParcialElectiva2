import { ERROR_MESSAGE } from "./Error.Message";

export class NotCreatedError extends Error {
    constructor() {
        super(ERROR_MESSAGE.NOT_CREATED);
    }
}