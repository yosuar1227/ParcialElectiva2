import Joi from "joi";

export const eventSchemaCreate = Joi.object({
  title : Joi.string().min(3).required(),
  description : Joi.string().min(3).required(),
  date : Joi.date().required(),
  location : Joi.string().min(1).required(),
  organizer : Joi.string().min(1).required(),
});

export const eventSchemaUpdate = Joi.object({
  title : Joi.string().min(3),
  description : Joi.string().min(3),
  date : Joi.date(),
  location : Joi.string().min(1),
  organizer : Joi.string().min(1),
});