import { Router } from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
} from "../controllers/payment.controller";

const router = Router();

router.post("/", createPayment);
router.get("/", getAllPayments);
router.get("/:id", getPaymentById);
router.delete("/:id", deletePayment);

export default router;
