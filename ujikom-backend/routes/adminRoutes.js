import express from 'express';
import { createAdmin, deleteAdmin, getAdminById, getAllAdmin, updateAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post("/admin",authenticateToken, createAdmin);
router.get("/admin",authenticateToken, getAllAdmin);
router.get("/admin/:id", getAdminById);
router.put("/admin/:id", updateAdmin)
router.delete("/admin/:id", deleteAdmin);

export default router;