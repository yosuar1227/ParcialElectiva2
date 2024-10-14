import { ERROR_MESSAGE } from "./Error.Message";

export class InternalError extends Error {
    constructor() {
        super(ERROR_MESSAGE.NOT_CREATED);
    }
}