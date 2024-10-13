import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCourses = async () => {
  return await prisma.course.findMany();
};

export const getCourse = async (id) => {
  return await prisma.course.findUnique({
    where: { id },
    include: { modules: true },
  });
};

export const getCourseModules = async (id) => {
  return await prisma.module.findMany({ where: { courseId: id } });
};

export const createCourse = async (data) => {
  return await prisma.course.create({ data });
};

export const updateCourse = async (id, data) => {
  return await prisma.course.update({ where: { id: id }, data });
};

export const deleteCourse = async (id) => {
  return await prisma.course.delete({ where: { id: id } });
};
