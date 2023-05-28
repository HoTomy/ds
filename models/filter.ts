import * as db from '../helpers/database';

export const getAllByFilter = async(cat: any) => {
  let keys = Object.keys(cat);
    let values = Object.values(cat);
    let param = '';
  for (let i: number = 0; i < values.length; i++) {
 param += `${keys[i]} like '%${values[i]}%' OR`
  }
 param = param.slice(0, -2);
    let query = `SELECT * FROM cats WHERE ${param} ORDER BY ID`;
    let data = await db.run_query(query, values);
  return data;
}
