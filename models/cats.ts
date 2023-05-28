import * as db from '../helpers/database';

export const getById = async (id: any) => {
  let query = 'SELECT * FROM cats WHERE ID = ?';
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

export const getAll = async() => {
  let query = 'SELECT * FROM cats order by id';
  let data = await db.run_query(query, null);
  return data;
}


export const add = async (cat: any) => {
    let keys = Object.keys(cat);
    let values = Object.values(cat);
    let key = keys.join(',');
    let param = '';
    for(let i: number=0; i<values.length; i++){ param +='?,'}
    param=param.slice(0,-1);
    let query = `INSERT INTO cats (${key}) VALUES (${param})`;
    try{
      await db.run_insert(query, values);
      return {status: 201};
    } catch(err: any) {
      return err;
    }
}

export const updateById = async (cat: any , id: any) => {
    let aid = [id];
    let keys = Object.keys(cat);
    let values = Object.values(cat);
    let param = '';
  for (let i: number = 0; i < values.length; i++) {
 param += `${keys[i]}= '${values[i]}',`
  }
 param = param.slice(0, -1);
    let query = `UPDATE cats SET ${param} WHERE id = ?`;
      try{
        await db.run_update(query, aid);
        return { status: 201 };
      } catch(err: any) {
        return err;                                             
      }
}

export const deleteById = async (id: any) => {
    let values = [id];
    let query =  `DELETE FROM cats WHERE id='${values}';`

    try{
        await db.run_delete(query, values);
        return { status: 201 };
    } catch(err: any) {
        return err;                                              
    }
}