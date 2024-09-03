import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

export const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id: id }, data });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: id } });
};

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email: email } });
};

export const findUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id: id } });
};
