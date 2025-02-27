import db from "../config/db.js";

export const createdUser = async (user_id, name, phone_number, email, password, user_type) => {
  const [result] = await db.execute(
    "INSERT INTO user_apk (user_id, name, phone_number, email, password, user_type) VALUES (?,?,?, ?, ?, ?)",
    [name, email, password]
  );
  return result;
};

export const getAllUsers = async () => {
  const [rows] = await db.execute("SELECT * FROM user_apk");
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM user_apk WHERE user_id = ?', [id])
  return rows;
};

export const deleteUser = async (id) => {
  const [result] = await db.execute('DELETE FROM user_apk WHERE user_id = ?', [id])
  return result;
};

export const updateUser = async (user_id, name, phone_number, email, password) => {
  const [result] = await db.execute(
    'UPDATE user_apk SET user_id = ?, name = ? , phone_number = ?, email = ? , password = ?',
    [name, email, password, user_id, phone_number]
  );
  return result;
};
