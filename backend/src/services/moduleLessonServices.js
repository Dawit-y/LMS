import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllModule = async () => {
  return await prisma.module.findMany();
};

export const getModule = async (id) => {
  return await prisma.module.findUnique({ where: { id } });
};

export const getModuleLessons = async (id) => {
  return await prisma.lesson.findMany({ where: { moduleId: id } });
};

export const createModule = async (data) => {
  return await prisma.module.create({ data });
};

export const updateModule = async (id, data) => {
  return await prisma.module.update({ where: { id: id }, data });
};

export const deleteModule = async (id) => {
  return await prisma.module.delete({
    where: {
      id: parseInt(id),
    },
  });
};

export const getAllLesson = async () => {
  return await prisma.lesson.findMany();
};
export const createLesson = async (data) => {
  return await prisma.lesson.create({ data });
};
export const updateLesson = async (id, data) => {
  return await prisma.lesson.update({ where: { id: id }, data });
};
export const deleteLesson = async (id) => {
  return await prisma.lesson.delete({
    where: {
      id: parseInt(id),
    },
  });
};
