import pool from "../index.js";

export const getTodos =async  () => {
      const result = await pool.query('SELECT * FROM todos ORDER BY "number of list" DESC');

      return result.rows;
}

export const postTodos = async (text) => {
      const result = await pool.query(
    'INSERT INTO todos ("todo list", completed) VALUES ($1, $2) RETURNING *',
    [text, false]
      );
      return result.rows[0];
}

export const putTodos = async (id, completed) => {
      
  await pool.query(
    'UPDATE todos SET completed=$1 WHERE "number of list"=$2 RETURNING *',
    [completed, id]
      );
      return result.rows[0];
}

export const deleteTodos = async (id) => {
      await pool.query('DELETE FROM todos WHERE "number of list"=$1', [id]);
      
      return { message: "deleted" };
}