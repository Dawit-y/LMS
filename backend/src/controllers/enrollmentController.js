import {
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
  getAllEnrollment,
  createStatus,
} from "../services/enrollmentService.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getEnrollmentController = async (req, res) => {
  try {
    const enrollments = await getAllEnrollment();
    return res.status(200).json(enrollments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEnrollmentController = async (req, res) => {
  try {
    const { courseId, studentId } = req.body;

    const result = await prisma.$transaction(async (prisma) => {
      const status = await createStatus("pending");
      const enrollment = await createEnrollment({
        data: {
          studentId,
          courseId,
          statusId: status.id,
        },
      });

      return enrollment;
    });

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEnrollmentController = async (req, res) => {
  try {
    const data = req.body;
    const enrollmentId = req.params.id;
    const enrollment = await updateEnrollment(enrollmentId, data);
    return res.status(200).json(enrollment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEnrollmentController = async (req, res) => {
  try {
    const enrollmentId = req.params.id;
    const enrollment = await deleteEnrollment(enrollmentId);
    return res.status(200).json(enrollment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
