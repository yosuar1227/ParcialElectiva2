import { NotFoundError } from "../../Domain/Errors/NotFoundError";
import { IEvent, IEventCreate } from "../../Domain/interfaces/Event.interfaces";
import { IEventServices } from "../../Domain/Services/IEvent.services";
import { IGenerateIdService } from "../interface/IGenerateId.interface";
import Event from '../models/event.model';

export class EventService implements IEventServices{
  private readonly event = Event

  constructor(private readonly getIdSrv: IGenerateIdService) {
        
  }

  async create(event : IEventCreate) : Promise<IEvent>{
    const newEvent : IEvent = {
      id : this.getIdSrv.get(),
      ...event
    }
    await this.event.create(newEvent);
    return newEvent;
  }

  async getAll() : Promise<IEvent[]>{
    const events = await this.event.find({});
    return events;
  }

  async getById( id : IEvent["id"] ) : Promise<IEvent | null> {
    const event = await this.event.findOne({id});
    if(!event)
      throw new NotFoundError();
    return event;
  }

  async update( id: IEvent["id"], event : Partial<IEvent> ) : Promise<IEvent | null>{
    const eventUpdated = await this.event.findOneAndUpdate({id}, event, {returnDocument:'after'});
    return eventUpdated;
  }

  async delete(id: IEvent["id"]) : Promise<IEvent | null> {
    const eventDeleted  = await this.event.findOneAndDelete({id}, {returnDocument:'after'});
    return eventDeleted;
  }
  
  
  
  
}
// delete: (id: IEvent["id"]) => Promise<Boolean>;
// update: (id: IEvent["id"], Event: Partial<IEvent>) => Promise<IEvent>;
// getById: (id: IEvent["id"]) => Promise<IEvent>;
