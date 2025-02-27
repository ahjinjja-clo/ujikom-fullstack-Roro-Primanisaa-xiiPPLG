import express from 'express';
import {createToko, getAlltoko, getTokoById, updateToko, deleteToko} from '../controllers/tokoController.js'

const router = express.Router();

router.post("/toko", createToko);
router.get("/toko", getAlltoko);
router.get("/toko/:id", getTokoById);
router.put("/toko/:id", updateToko);
router.delete("/toko/:id", deleteToko);

export default router;