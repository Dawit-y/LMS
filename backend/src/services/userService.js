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

export const markLessonCompleted = async (userId, lessonId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { completedLessons: true },
    });
    if (!user) {
      return null;
    }
    const completedLessonsArray = user.completedLessons
      ? user.completedLessons.split(",")
      : [];
    if (completedLessonsArray.includes(lessonId)) {
      return null;
    }
    completedLessonsArray.push(lessonId);
    const updatedCompletedLessons = completedLessonsArray.join(",");
    const updatedUser = await updateUser(userId, {
      completedLessons: updatedCompletedLessons,
    });
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

//creators

export const getAllCreators = async () => {
  return await prisma.creator.findMany();
};

export const getCreatorByUserId = async (userId) => {
  return await prisma.creator.findUnique({ where: { userId } });
};

export const createCreator = async (data) => {
  return await prisma.creator.create({ data });
};

export const updateCreator = async (id, data) => {
  return await prisma.creator.update({ where: { id: id }, data });
};

export const deleteCreator = async (id) => {
  return await prisma.creator.delete({ where: { id: id } });
};
