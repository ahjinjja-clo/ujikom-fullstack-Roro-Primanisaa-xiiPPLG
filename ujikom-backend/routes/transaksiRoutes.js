import express from 'express';
import {createTransaction, getAllTransaction, getTransactionById, updateTransaction, deleteTransaction} from '../controllers/transaksiController.js';

const router = express.Router();

router.post("/transaction", createTransaction);
router.get("/transaction", getAllTransaction);
router.get("/transaction/:id", getTransactionById);
router.put("/transaction/:id", updateTransaction);
router.delete("/transaction/:id", deleteTransaction);

export default router;