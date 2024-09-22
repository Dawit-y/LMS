import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllEnrollment = async () => {
  return await prisma.enrollment.findMany();
};
export const createEnrollment = async (data) => {
  return await prisma.enrollment.create(data);
};
export const updateEnrollment = async (id, data) => {
  return await prisma.enrollment.update(id, data);
};
export const deleteEnrollment = async (id) => {
  return await prisma.enrollment.delete(id);
};

export const createStatus = async (statusName) => {
  return await prisma.status.create({
    data: {
      name: statusName, // Pass the name of the status
    },
  });
};
