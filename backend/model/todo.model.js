import pool from "../index.js";

export const getTodos =async  (userId) => {
      const result = await pool.query('SELECT * FROM todos WHERE user_id = $1', [userId]);

      return result.rows;
}

export const postTodos = async (text, userId) => {
      const result = await pool.query(
    'INSERT INTO todos ("todo list", completed, user_id ) VALUES ($1, $2, $3) RETURNING *',
    [text, false, userId]
      );
      return result.rows[0];
}

export const putTodos = async (id, completed) => {
      
      const result = await pool.query(
    'UPDATE todos SET completed=$1 WHERE "number of list"=$2 RETURNING *',
    [completed, id]
      );
      return result.rows[0];
}

export const deleteTodos = async (id) => {
      await pool.query('DELETE FROM todos WHERE "number of list"=$1', [id]);
      
      return { message: "deleted" };
}