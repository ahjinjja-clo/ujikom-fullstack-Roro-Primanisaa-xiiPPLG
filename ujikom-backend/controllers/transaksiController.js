import * as transactionModels from '../models/transaksiModels.js';

export const createTransaction = async (req, res) => {
     try{
        const { nama} = req.body;
        const result = await transactionModels.createTransaksi();
        res.status(201).json({msg: "transaction created", result});
     }catch(error){
        res.status(500).json({msg: "can't create transaction", mess: error.message});
     }
}

export const getAllTransaction = async (req, res) =>{
    try{
        const result = await transactionModels.getAllTransaksi();
        res.status(200).json(result);
        } catch(error){
        res.status(500).json({msg: "Can't get transaction"});
    }
}

export const getTransactionById = async(req, res) => {
    try{
        const {id} = req.params;
        const transaction = await reviewModels.getTransaksiById(id);
        if(transaction.length === 0){
            return res.status(404).json({message:"transaction not found"})
        }
        res.status(200).json(transaction);
    } catch(error){
        res.status(500).json({message:error.message})
    }

}

export const updateTransaction = async (req, res) =>{
    try{
        const {id_review} = req.params;
        const {} = req.body;
        const result = await transactionModels.updateTransaksi();
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"transaction not found"})
        }
        res.status(200).json({message: "transaction updated", result});
    } catch (error){
        res.status(500).json({message:error.message})
    }
}

export const deleteTransaction = async(req, res) =>{
    try{
        const {id_review} = req.params;
        const result = await transactionModels.deleteTransaksi(NIP);
        if(result.affectedRows === 0 ){
            return res.status(404).json({message:"transaction not found"})
        }
        res.status(200).json({message: "transaction has been deleted successfully", result});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}