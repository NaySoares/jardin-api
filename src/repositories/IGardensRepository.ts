import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateRentalDTO {
  customerId: string;
  carId: string;
  startDate: string;
  endDate: string;
  price: number;
}

export const rentalRepository = {
  create: async (data: CreateRentalDTO) => {
    return await prisma.rental.create({
      data: {
        customerId: data.customerId,
        carId: data.carId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        price: data.price,
        status: "ativo",
      },
    });
  },
};
