import db from '../config/db.js';

export const createReview = async (id_review, nama, review, rating, nama_barang, id_toko, id_user) => {
    const [result] = await db.execute(
        "INSERT INTO review (id_review, nama, review, rating, nama_barang, id_toko, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [id_review, nama, review, rating, nama_barang, id_toko, id_user]
    );
    return result;
}

export const getAllReviews = async () => {
    const [rows] = await db.execute("SELECT * FROM review");
    return rows;
}

export const getReviewById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM review WHERE id_review = ?", [id]);
    return rows[0];
}

export const updateReview = async (id, data) => {
    const { nama, review, rating, nama_barang, id_toko, id_user } = data;
    const [rows] = await db.execute(
        "UPDATE review SET nama = ?, review = ?, rating = ?, nama_barang = ?, id_toko = ?, id_user = ? WHERE id_review = ?",
        [nama, review, rating, nama_barang, id_toko, id_user, id]
    );
    return rows;
}

export const deleteReview = async (id) => {
    const [result] = await db.execute("DELETE FROM review WHERE id_review = ?", [id]);
    return result;
}
