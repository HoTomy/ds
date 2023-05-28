import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/user';


const router = new Router({prefix: '/api/v1/user'});

const getAlluser = async (ctx: RouterContext, next: any)=> {
 let user = await model.getAlluser();
 if (user.length) {
 ctx.body = user;
 } else {
 ctx.body = {}
 }
 await next();
}

const getByUserId = async (ctx: RouterContext, next: any) => {
  let id = ctx.params.id;
  let user = await model.getByUserId(id);
  if (user.length) {
    ctx.body = user[0];
  } else {
    ctx.status = 404;
  }
  await next();
}

const register = async (ctx: RouterContext, next: any) => {
  const body = ctx.request.body;
  let result = await model.register(body);
  if (result.status == 201) {
    ctx.status = 201;
    ctx.body = body;
  } else {
    ctx.status = 500;
    ctx.body = {err: "insert data failed"};
  }
  await next();
}

const updateUser = async (ctx: RouterContext, next: any) => {
    let id = ctx.params.id;
    let context: any = ctx.request.body;
    let update_user = await model.updateByUserId(context,id);
    let user = await model.getByUserId(id);
    ctx.body = user;
    ctx.status = 200;  
    if (user.length){
        ctx.body = user;
    } else {
        ctx.body = {}
    }
    await next();
}

const deleteUser = async (ctx: RouterContext, next: any) => {
    let id = ctx.params.id;
    await model.deleteByUserId(id);
    let user = await model.getByUserId(id);
    ctx.body = user;
    ctx.status = 200;  
    if (user.length){
    } else {
        ctx.body = `id:${id} deleted success`
    }
    await next();
}

router.get('/', getAlluser);
router.get('/:id([0-9]{1,})', getByUserId);
router.post('/', bodyParser(), register);
router.put('/:id([0-9]{1,})',bodyParser(),updateUser);
router.del('/:id([0-9]{1,})', deleteUser);


export { router };
