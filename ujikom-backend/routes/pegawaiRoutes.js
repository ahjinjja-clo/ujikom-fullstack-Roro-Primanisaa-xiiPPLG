import express from 'express'
import {  createPegawai, deletePegawai, getAllPegawai, getPegawaiById, updatePegawai } from '../controllers/pegawaiController.js';

const router = express.Router();

router.post("/pegawai", createPegawai);
router.get("/pegawai", getAllPegawai);
router.get("/pegawai/:id", getPegawaiById);
router.put("/pegawai/:id", updatePegawai);
router.delete("/pegawai/:id", deletePegawai);

export default router;