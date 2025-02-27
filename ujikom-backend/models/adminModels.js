import db from '../config/db.js';

export const createAdmin = async (employee_id, name, password) => {
    const [result] = await db.execute(
        "INSERT INTO admin (employee_id, name, password) VALUES (?, ?, ?)",
        [employee_id, name, password]
    );
    return result;
}

export const getAllAdmin = async () => {
    const [rows] = await db.execute("SELECT * FROM admin");
    return rows;
}

export const getAdminById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM admin WHERE employee_id = ?", [id]);
    return rows[0];
}

export const updateAdmin = async (id, data) => {
    const { name, password } = data;
    const [rows] = await db.execute(
        "UPDATE admin SET name = ?, password = ? WHERE employee_id = ?",
        [name, password, id]
    );
    return rows;
}

export const deleteAdmin = async (id) => {
    const [result] = await db.execute("DELETE FROM admin WHERE employee_id = ?", [id]);
    return result;
}
