import { v4 } from "uuid";
import { IGenerateIdService } from "../interface/IGenerateId.interface";

export class GenerateIdService implements IGenerateIdService {
    get(): string {
        return v4();
    }
}