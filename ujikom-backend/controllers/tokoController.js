import * as tokoModels from '../models/tokoModels.js';

export const createToko = async (req, res) => {
     try{
        const { nama} = req.body;
        const result = await tokoModels.createToko();
        res.status(201).json({msg: "toko created", result});
     }catch(error){
        res.status(500).json({msg: "can't create toko, please try again", mess: error.message});
     }
}

export const getAlltoko = async (req, res) =>{
    try{
        const result = await tokoModels.getAllToko();
        res.status(200).json(result);
        } catch(error){
        res.status(500).json({msg: "Can't get toko"});
    }
}

export const getTokoById = async(req, res) => {
    try{
        const {id} = req.params;
        const toko = await tokoModels.getTokoById(id);
        if(toko.length === 0){
            return res.status(404).json({message:"toko not found"})
        }
        res.status(200).json(toko);
    } catch(error){
        res.status(500).json({message:error.message})
    }

}

export const updateToko = async (req, res) =>{
    try{
        const {id_review} = req.params;
        const {} = req.body;
        const result = await tokoModels.updateToko();
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"toko not found"})
        }
        res.status(200).json({message: "toko updated", result});
    } catch (error){
        res.status(500).json({message:error.message})
    }
}

export const deleteToko = async(req, res) =>{
    try{
        const {id_review} = req.params;
        const result = await tokoModels.deleteToko(NIP);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"Toko not found"})
        }
        res.status(200).json({message: "toko has been deleted successfully", result});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}