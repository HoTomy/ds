import * as db from '../helpers/database';

export const getById = async (id: any) => {
  let query = 'SELECT * FROM dogs WHERE ID = ?';
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

export const getAll = async() => {
  let query = 'SELECT * FROM dogs order by id';
  let data = await db.run_query(query, null);
  return data;
}


export const add = async (dog: any) => {
    let keys = Object.keys(dog);
    let values = Object.values(dog);
    let key = keys.join(',');
    let param = '';
    for(let i: number=0; i<values.length; i++){ param +='?,'}
    param=param.slice(0,-1);
    let query = `INSERT INTO dogs (${key}) VALUES (${param})`;
    try{
      await db.run_insert(query, values);
      return {status: 201};
    } catch(err: any) {
      return err;
    }
}

export const updateById = async (dog: any , id: any) => {
    let aid = [id];
    let keys = Object.keys(dog);
    let values = Object.values(dog);
    let param = '';
  for (let i: number = 0; i < values.length; i++) {
 param += `${keys[i]}= '${values[i]}',`
  }
 param = param.slice(0, -1);
    let query = `UPDATE dogs SET ${param} WHERE id = ?`;
      try{
        await db.run_update(query, aid);
        return { status: 201 };
      } catch(err: any) {
        return err;                                             
      }
}

export const deleteById = async (id: any) => {
    let values = [id];
    let query =  `DELETE FROM dogs WHERE id='${values}';`

    try{
        await db.run_delete(query, values);
        return { status: 201 };
    } catch(err: any) {
        return err;                                              
    }
}
