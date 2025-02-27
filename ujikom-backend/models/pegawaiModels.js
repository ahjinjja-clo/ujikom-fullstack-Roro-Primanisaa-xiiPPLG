import db from '../config/db.js';

export const createPegawai = async (employee_id, name, phone_no, email, address) => {
    const [result] = await db.execute(
        "INSERT INTO pegawai (employee_id, name, phone_no, email, address) VALUES (?, ?, ?, ?, ?)",
        [employee_id, name, phone_no, email, address]
    );
    return result;
}

export const getAllPegawai = async () => {
    const [rows] = await db.execute("SELECT * FROM pegawai");
    return rows;
}

export const getPegawaiById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM pegawai WHERE employee_id = ?", [id]);
    return rows[0];
}

export const updatePegawai = async (id, data) => {
    const { name, phone_no, email, address } = data;
    const [rows] = await db.execute(
        "UPDATE pegawai SET name = ?, phone_no = ?, email = ?, address = ? WHERE employee_id = ?",
        [name, phone_no, email, address, id]
    );
    return rows;
}

export const deletePegawai = async (id) => {
    const [result] = await db.execute("DELETE FROM pegawai WHERE employee_id = ?", [id]);
    return result;
}
