import * as db from '../helpers/database';

export const getAllByFilter = async(dog: any) => {
  let keys = Object.keys(dog);
    let values = Object.values(dog);
    let param = '';
  for (let i: number = 0; i < values.length; i++) {
 param += `${keys[i]} like '%${values[i]}%' OR`
  }
 param = param.slice(0, -2);
    let query = `SELECT * FROM dogs WHERE ${param} ORDER BY ID`;
    let data = await db.run_query(query, values);
  return data;
}
