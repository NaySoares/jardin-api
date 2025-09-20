import express from "express";
import { rentalRoutes } from "./routes/rental.routes";

const app = express();

app.use(express.json());
app.use("/api", rentalRoutes);

app.listen(3000, () => console.log(" API rodando na porta 3000"));
