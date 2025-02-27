import express from 'express';
import {createReview, getAllReview, getReviewById, updateReview, deleteReview} from '../controllers/reviewController.js'

const router = express.Router();

router.post("/review", createReview);
router.get("/review", getAllReview);
router.get("/review/:id", getReviewById);
router.put("/review/:id", updateReview);
router.delete("/review/:id", deleteReview);

export default router;