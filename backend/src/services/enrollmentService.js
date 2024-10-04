import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllEnrollment = async () => {
  return await prisma.enrollment.findMany();
};
export const createEnrollment = async (data) => {
  return await prisma.enrollment.create(data);
};
export const updateEnrollment = async (id, data) => {
  return await prisma.enrollment.update({ where: { id: id }, data });
};
export const deleteEnrollment = async (id) => {
  return await prisma.enrollment.delete({
    where: {
      id: parseInt(id),
    },
  });
};

export const checkForEnrollment = (courseId, studentId) => {
  return prisma.enrollment.findUnique({
    where: {
      studentId_courseId: {
        studentId,
        courseId,
      },
    },
  });
};

// status services

export const getStatus = async () => {
  return await prisma.status.findMany();
};

export const createStatus = async (statusName) => {
  return await prisma.status.create({
    data: {
      name: statusName,
    },
  });
};

export const updateStatus = async (id, data) => {
  return await prisma.status.update({ where: { id: id }, data });
};

export const deleteStatus = async (id) => {
  return await prisma.status.delete({ where: { id: id } });
};
