import * as db from '../helpers/database';

export const findByUsername = async (username: string) => {
  const query = `SELECT * FROM USERS WHERE USERNAME = ?`;
  const user = await db.run_query(query, [username]);
  return user;
}


