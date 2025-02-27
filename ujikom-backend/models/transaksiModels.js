import db from '../config/db.js';

// Create a new transaction
export const createTransaksi = async (nama_barang, jumlah_barang, metode_bayar, total_belanja, id_toko, id_user) => {
    const [result] = await db.execute(
        "INSERT INTO transaksi (nama_barang, jumlah_barang, metode_bayar, total_belanja, id_toko, id_user) VALUES (?, ?, ?, ?, ?, ?)", 
        [nama_barang, jumlah_barang, metode_bayar, total_belanja, id_toko, id_user]
    );
    return result;
}

// Get all transactions
export const getAllTransaksi = async () => {
    const [rows] = await db.execute(
        "SELECT * FROM transaksi"
    );
    return rows;
}

// Get a transaction by ID
export const getTransaksiById = async (id) => {
    const [rows] = await db.execute(
        "SELECT * FROM transaksi WHERE id_transaksi = ?", [id]
    );
    return rows[0]; // Return single transaction
}

// Update a transaction
export const updateTransaksi = async (id, data) => {
    const { nama_barang, jumlah_barang, metode_bayar, total_belanja, id_toko, id_user } = data;
    const [rows] = await db.execute(
        "UPDATE transaksi SET nama_barang = ?, jumlah_barang = ?, metode_bayar = ?, total_belanja = ?, id_toko = ?, id_user = ? WHERE id_transaksi = ?", 
        [nama_barang, jumlah_barang, metode_bayar, total_belanja, id_toko, id_user, id]
    );
    return rows;
}

// Delete a transaction
export const deleteTransaksi = async (id) => {
    const [result] = await db.execute(
        "DELETE FROM transaksi WHERE id_transaksi = ?", [id]
    );
    return result;
}
