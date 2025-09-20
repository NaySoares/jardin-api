import { Request, Response } from "express";
import { createRentalUseCase } from "../useCase/createRentalUseCase";


export const createRentalController = async (req: Request, res: Response) => {
  try {
    const { customerId, carId, startDate, endDate, price } = req.body;



    if (!customerId || !carId || !startDate || !endDate || !price) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    const rental = await createRentalUseCase({
      customerId,
      carId,
      startDate,
      endDate,
      price,
    });

    return res.status(201).json(rental);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};
