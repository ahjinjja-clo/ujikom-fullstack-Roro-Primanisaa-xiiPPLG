import * as reviewModels from '../models/reviewModels.js';

export const createReview = async (req, res) => {
     try{
        const { nama} = req.body;
        const result = await reviewModels.creatReview();
        res.status(201).json({msg: "review created", result});
     }catch(error){
        res.status(500).json({msg: "can't create review", mess: error.message});
     }
}

export const getAllReview = async (req, res) =>{
    try{
        const result = await reviewModels.getAllReview();
        res.status(200).json(result);
        } catch(error){
        res.status(500).json({msg: "Can't get review"});
    }
}

export const getReviewById = async(req, res) => {
    try{
        const {id} = req.params;
        const review = await reviewModels.getReviewById(id);
        if(review.length === 0){
            return res.status(404).json({message:"review not found"})
        }
        res.status(200).json(review);
    } catch(error){
        res.status(500).json({message:error.message})
    }

}

export const updateReview = async (req, res) =>{
    try{
        const {id_review} = req.params;
        const {} = req.body;
        const result = await reviewModels.updateReview();
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"review not found"})
        }
        res.status(200).json({message: "review updated", result});
    } catch (error){
        res.status(500).json({message:error.message})
    }
}

export const deleteReview = async(req, res) =>{
    try{
        const {id_review} = req.params;
        const result = await reviewModels.deleteReview(NIP);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"review not found"})
        }
        res.status(200).json({message: "review has been deleted successfully", result});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}