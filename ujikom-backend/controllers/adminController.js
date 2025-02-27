import * as adminModels from '../models/adminModels.js';

export const createAdmin = async (req, res) => {
     try{
        const { nama} = req.body;
        const result = await adminModels.createAdmin();
        res.status(201).json({msg: "admin created", result});
     }catch(error){
        res.status(500).json({msg: "can't create admin, please try again", mess: error.message});
     }
}

export const getAllAdmin = async (req, res) =>{
    try{
        const result = await adminModels.getAllAdmin();
        res.status(200).json(result);
        } catch(error){
        res.status(500).json({msg: "Can't get all admin"});
    }
}

export const getAdminById = async(req, res) => {
    try{
        const {id} = req.params;
        const admin = await adminModels.getAdminById(id);
        if(admin.length === 0){
            return res.status(404).json({message:"admin not found"})
        }
        res.status(200).json(admin);
    } catch(error){
        res.status(500).json({message:error.message})
    }

}

export const updateAdmin = async (req, res) =>{
    try{
        const {id_review} = req.params;
        const {} = req.body;
        const result = await adminModels.updateAdmin();
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"Admin not found"})
        }
        res.status(200).json({message: "admin updated", result});
    } catch (error){
        res.status(500).json({message:error.message})
    }
}

export const deleteAdmin = async(req, res) =>{
    try{
        const {id_review} = req.params;
        const result = await adminModels.deleteAdmin(NIP);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"Admin not found"})
        }
        res.status(200).json({message: "admin has been deleted successfully", result});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}