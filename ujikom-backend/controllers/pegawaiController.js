import * as pegawaiModel from '../models/pegawaiModels.js';

export const createPegawai = async (req, res) => {
     try{
        const { nama, alamat, no_telp, email, password } = req.body;
        const result = await pegawaiModel.createPegawai();
        res.status(201).json({msg: "employee created", result});
     }catch(error){
        res.status(500).json({msg: "Error create employee", mess: error.message});
     }
}

export const getAllPegawai = async (req, res) =>{
    try{
        const result = await pegawaiModel.getAllPegawai();
        res.status(200).json(result);
        } catch(error){
        res.status(500).json({msg: "Can't get employee"});
    }
}

export const getPegawaiById = async(req, res) => {
    try{
        const {id} = req.params;
        const pegawai = await pegawaiModel.getPegawaiById(id);
        if(pegawai.length === 0){
            return res.status(404).json({message:"employee not found"})
        }
        res.status(200).json(pegawai);
    } catch(error){
        res.status(500).json({message:error.message})
    }

}

export const updatePegawai = async (req, res) =>{
    try{
        const {NIP} = req.params;
        const {nama, alamat, no_telp, email, password} = req.body;
        const result = await pegawaiModel.updatePegawai(NIP, nama, alamat, no_telp, email, password);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"employee not found"})
        }
        res.status(200).json({message: "employee updated", result});
    } catch (error){
        res.status(500).json({message:error.message})
    }
}

export const deletePegawai = async(req, res) =>{
    try{
        const {NIP} = req.params;
        const result = await pegawaiModel.deletePegawai(NIP);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"employee not found"})
        }
        res.status(200).json({message: "employee deleted", result});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}