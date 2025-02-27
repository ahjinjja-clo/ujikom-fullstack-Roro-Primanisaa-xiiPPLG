import db from '../config/db.js';

export const createBarang = async (id_barang, nama_barang, kondisi, stok, id_toko, nama_toko, jenis_barang, berat_barang) => {
    const [result] = await db.execute(
        "INSERT INTO barang (id_barang, nama_barang, kondisi, stok, id_toko, nama_toko, jenis_barang, berat_barang) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [id_barang, nama_barang, kondisi, stok, id_toko, nama_toko, jenis_barang, berat_barang]
    );
    return result;
}
