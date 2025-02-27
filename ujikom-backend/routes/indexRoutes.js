import express from 'express';
import { checkDBConnection } from '../config/db.js';

const router = express.Router();

router.get('/', async(req,res) => {
    const dbStatus = await checkDBConnection();

    if(dbStatus.status) {
        res.status(200).json({
            code: 200,
            message : "Success",
            data: {
                message : "System is running on port 5500! fighting!"
            }
        })
    }else{
        res.status(500).json({
            code: 500,
            message : "connection failed",
            error: dbStatus.error,
            data: {
                error: dbStatus.error
            }
        })
    }
})
export default router