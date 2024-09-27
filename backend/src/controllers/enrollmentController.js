import {
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
  getAllEnrollment,
  createStatus,
  getStatus,
  updateStatus,
  deleteStatus,
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
    if (!(courseId && studentId)) {
      return res
        .status(400)
        .json({ message: "course and student ID not found" });
    }
    const status = await createStatus("pending");

    const enrollment = await createEnrollment({
      data: {
        studentId,
        courseId,
        statusId: status.id,
      },
    });

    return res.status(201).json(enrollment);
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

export const getStatusController = async (req, res) => {
  try {
    const statuses = await getStatus();
    return res.status(200).json(statuses);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createStatusController = async (req, res) => {
  try {
    const statusName = req.body;
    const status = await createStatus(statusName);
    return res.status(200).json(status);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateStatusController = async (req, res) => {
  try {
    const statusId = req.params.id;
    const data = req.body;
    const status = await updateStatus(statusId, data);
    return res.status(200).json(status);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteStatusController = async (req, res) => {
  try {
    const statusId = req.params.id;
    const status = await deleteStatus(statusId);
    return res.status(200).json(status);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
