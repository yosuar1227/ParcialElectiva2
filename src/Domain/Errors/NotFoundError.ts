import { ERROR_MESSAGE } from "./Error.Message";

export class NotFoundError extends Error {
    constructor() {
        super( ERROR_MESSAGE.NOT_FOUND);
    }
}