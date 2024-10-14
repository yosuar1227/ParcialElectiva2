
import { Request, Response } from "express";
import { NotCreatedError } from "../../Domain/Errors/NotCreatedError";
import { NotFoundError } from "../../Domain/Errors/NotFoundError";

export class ResponseAdapter {
    static handler(func: Promise<any>, req: Request, res: Response) {
        func.then(data => {
            res.status(200).send(data);
        }).catch((error) => {
            if(error instanceof NotCreatedError) {
                res.status(400).send({
                    msg: error.message
                });
            } else if(error instanceof NotFoundError) {
                res.status(404).send({
                    msg: error.message
                });
            } else {
                res.status(500).send({
                    msg: "Internal server error"
                });
            }
        });
    }
}