import * as barangModels from '../models/barangModels.js';

export const createBarang = async (req, res) => {
     try{
        const { nama} = req.body;
        const result = await barangModels.createBarang();
        res.status(201).json({msg: "barang created", result});
     }catch(error){
        res.status(500).json({msg: "can't create barang", mess: error.message});
     }
}

export const getAllBarang= async (req, res) =>{
    try{
        const result = await barangModels.getAllBarang();
        res.status(200).json(result);
        } catch(error){
        res.status(500).json({msg: "Can't get barang"});
    }
}

export const getBarangById = async(req, res) => {
    try{
        const {id} = req.params;
        const barang = await barangModels.getBarangById(id);
        if(barang.length === 0){
            return res.status(404).json({message:"barang not found"})
        }
        res.status(200).json(barang);
    } catch(error){
        res.status(500).json({message:error.message})
    }

}

export const updateBarang = async (req, res) =>{
    try{
        const {id_review} = req.params;
        const {} = req.body;
        const result = await barangModels.updateBarang();
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"barang not found"})
        }
        res.status(200).json({message: "barang updated", result});
    } catch (error){
        res.status(500).json({message:error.message})
    }
}

export const deleteBarang = async(req, res) =>{
    try{
        const {id_review} = req.params;
        const result = await barangModels.deleteBarang(NIP);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"barang not found"})
        }
        res.status(200).json({message: "barang has been deleted successfully", result});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}