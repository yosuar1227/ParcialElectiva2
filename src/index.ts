import express from "express"
import 'dotenv/config'
import { Parameters } from "./utils/constans";
import { initDatabase } from "./config/database/database";
import { eventRouter } from "./infrastructure/httpAdapter/requestAdapter";

const PORT = 3005
const app = express();
app.use(express.json());
app.use("/events", eventRouter);


app.listen(PORT, async ()=>{
    console.log("Server running at port", Parameters.DATABASE_PORT);
    await initDatabase(Parameters.MONGO_URI);
})

