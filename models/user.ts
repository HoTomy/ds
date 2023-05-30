import * as db from '../helpers/database';

export const findByUsername = async (username: string) => {
  const query = `SELECT * FROM public.user WHERE USERNAME = ?`;
  const user = await db.run_query(query, [username]);
  return user;
}

export const getAlluser = async() => {
  let query = 'SELECT * FROM public.user order by id';
  let data = await db.run_query(query, null);
  return data;
}

export const getByUserId = async (id: any) => {
  let query = 'SELECT * FROM public.user WHERE ID = ?';
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
}

export const register = async (user: any) => {
    let keys = Object.keys(user);
    let values = Object.values(user);
    let key = keys.join(',');
    let param = '';
    for(let i: number=0; i<values.length; i++){ param +='?,'}
    param=param.slice(0,-1);
    let query = `INSERT INTO public.user (${key}) VALUES (${param})`;
    try{
      await db.run_insert(query, values);
      return {status: 201};
    } catch(err: any) {
      return err;
    }
}

export const updateByUserId = async (user: any , id: any) => {
    let aid = [id];
    let keys = Object.keys(user);
    let values = Object.values(user);
    let param = '';
  for (let i: number = 0; i < values.length; i++) {
 param += `${keys[i]}= '${values[i]}',`
  }
 param = param.slice(0, -1);
    let query = `UPDATE public.user SET ${param} WHERE id = ?`;
      try{
        await db.run_update(query, aid);
        return { status: 201 };
      } catch(err: any) {
        return err;                                             
      }
}

export const deleteByUserId = async (id: any) => {
    let values = [id];
    let query =  `DELETE FROM public.user WHERE id='${values}';`

    try{
        await db.run_delete(query, values);
        return { status: 201 };
    } catch(err: any) {
        return err;                                              
    }
}