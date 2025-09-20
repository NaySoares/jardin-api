import { Router } from "express";
import { createRentalController } from "../controllers/rentalController";

const rentalRoutes = Router();

rentalRoutes.post("/rental", createRentalController);

export { rentalRoutes };
