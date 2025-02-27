import db from '../config/db.js';

export const createToko = async (id_toko, nama_toko, user_id, email_toko, lokasi) => {
    const [result] = await db.execute(
        "INSERT INTO toko (id_toko, nama_toko, user_id, email_toko, lokasi) VALUES (?, ?, ?, ?, ?)",
        [id_toko, nama_toko, user_id, email_toko, lokasi]
    );
    return result;
}

export const getAllToko = async () => {
    const [rows] = await db.execute("SELECT * FROM toko");
    return rows;
}

export const getTokoById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM toko WHERE id_toko = ?", [id]);
    return rows[0];
}

export const updateToko = async (id, data) => {
    const { nama_toko, user_id, email_toko, lokasi } = data;
    const [rows] = await db.execute(
        "UPDATE toko SET nama_toko = ?, user_id = ?, email_toko = ?, lokasi = ? WHERE id_toko = ?",
        [nama_toko, user_id, email_toko, lokasi, id]
    );
    return rows;
}

export const deleteToko = async (id) => {
    const [result] = await db.execute("DELETE FROM toko WHERE id_toko = ?", [id]);
    return result;
}
