
import mongoose from "mongoose";
import { IEvent } from "../../Domain/interfaces/Event.interfaces";

const eventSchema = new mongoose.Schema<IEvent>({
  id : {
    type : String,
    required : true
  },
  title : {
    type : String,
    require : true
  },
  description : {
    type : String,
    require : true
  },
  date : {
    type : Date,
    require : true
  },
  location : {
    type : String,
    require : true
  },
  organizer : {
    type : String,
    require : true
  }
});

eventSchema.methods.toJSON = function () {
  const { __v, _id, ...event } = this.toObject();
  return event;
}

const Event = mongoose.model('Event', eventSchema);

export default Event; 