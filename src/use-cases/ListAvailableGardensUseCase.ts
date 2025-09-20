import { rentalRepository } from "../repositories/rentalRepository";

interface CreateRentalDTO {
  customerId: string;
  carId: string;
  startDate: string;
  endDate: string;
  price: number;
}

export const createRentalUseCase = async (data: CreateRentalDTO) => {
  if (new Date(data.startDate) >= new Date(data.endDate)) {
    throw new Error("A data de início deve ser antes da data de fim!");
  }

  return await rentalRepository.create(data);
};
