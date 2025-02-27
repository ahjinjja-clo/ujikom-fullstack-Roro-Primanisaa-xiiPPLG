import express from 'express';
import { createBarang, deleteBarang, getAllBarang, getBarangById, updateBarang } from '../controllers/barangController.js'

const router = express.Router();

router.post('/barang', createBarang);
router.get('/barang', getAllBarang);
router.get('/barang/:id', getBarangById);
router.put('/barang/:id', updateBarang)
router.delete('/barang/:id', deleteBarang);

export default router;