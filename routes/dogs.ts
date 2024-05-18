import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/dogs';
import { basicAuth } from "../controllers/auth";


const router = new Router({prefix: '/api/v1/dogs'});


// New getAll
const getAll = async (ctx: RouterContext, next: any)=> {
 let dogs = await model.getAll();
 if (dogs.length) {
 ctx.body = dogs;
 } else {
 ctx.body = {}
 }
 await next();
}

const getById = async (ctx: RouterContext, next: any) => {
  let id = ctx.params.id;
  let dog = await model.getById(id);
  if (dog.length) {
    ctx.body = dog[0];
  } else {
    ctx.status = 404;
  }
  await next();
}

const createDogs = async (ctx: RouterContext, next: any) => {
  const body = ctx.request.body;
  let result = await model.add(body);
  if (result.status == 201) {
    ctx.status = 201;
    ctx.body = body;
  } else {
    ctx.status = 500;
    ctx.body = {err: "insert data failed"};
  }
  await next();
}

const updateDogs = async (ctx: RouterContext, next: any) => {
    let id = ctx.params.id;
    let context: any = ctx.request.body;
    let update_dogs = await model.updateById(context,id);
    let dog = await model.getById(id);
    ctx.body = dog;
    ctx.status = 200;  
    if (dog.length){
        ctx.body = dog;
    } else {
        ctx.body = {}
    }
    await next();
}

const deleteDogs = async (ctx: RouterContext, next: any) => {
    let id = ctx.params.id;
    await model.deleteById(id);
    let dog = await model.getById(id);
    ctx.body = dog;
    ctx.status = 200;  
    if (dog.length){
    } else {
        ctx.body = `id:${id} deleted success`
    }
    await next();
}

router.get('/', getAll);
router.get('/:id([0-9]{1,})', getById);
router.post('/',basicAuth, bodyParser(), createDogs);
router.put('/:id([0-9]{1,})',basicAuth,bodyParser(),updateDogs);
router.del('/:id([0-9]{1,})',basicAuth, deleteDogs);

// Finally, define the exported object when import from other scripts.
export { router };
