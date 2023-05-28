import * as db from '../helpers/database';

export const login = async(cat: any) => {
  let keys = Object.keys(cat);
    let values = Object.values(cat);
    let param = '';
  for (let i: number = 0; i < values.length; i++) {
 param += `${keys[i]} = '${values[i]}' AND `
  }
 param = param.slice(0, -4);
    let query = `SELECT * FROM public.user WHERE ${param} `;
    let data = await db.run_query(query, values);
  return data;
}
