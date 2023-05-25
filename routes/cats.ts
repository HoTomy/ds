import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/cats';
import { basicAuth } from "../controllers/auth";


const router = new Router({prefix: '/api/v1/cats'});


// New getAll
const getAll = async (ctx: RouterContext, next: any)=> {
 let cats = await model.getAll();
 if (cats.length) {
 ctx.body = cats;
 } else {
 ctx.body = {}
 }
 await next();
}

const getById = async (ctx: RouterContext, next: any) => {
  let id = ctx.params.id;
  let cat = await model.getById(id);
  if (cat.length) {
    ctx.body = cat[0];
  } else {
    ctx.status = 404;
  }
  await next();
}

const createCats = async (ctx: RouterContext, next: any) => {
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

const updateCats = async (ctx: RouterContext, next: any) => {
    let id = ctx.params.id;
    let context: any = ctx.request.body;
    let update_cats = await model.updateById(context,id);
    let cat = await model.getById(id);
    ctx.body = cat;
    ctx.status = 200;  
    if (cat.length){
        ctx.body = cat;
    } else {
        ctx.body = {}
    }
    await next();
}

const deleteCats = async (ctx: RouterContext, next: any) => {
    let id = ctx.params.id;
    await model.deleteById(id);
    let cat = await model.getById(id);
    ctx.body = cat;
    ctx.status = 200;  
    if (cat.length){
    } else {
        ctx.body = `id:${id} deleted success`
    }
    await next();
}

router.get('/', getAll);
router.get('/:id([0-9]{1,})', getById);
router.post('/',basicAuth, bodyParser(), createCats);
router.put('/:id([0-9]{1,})',basicAuth,bodyParser(),updateCats);
router.del('/:id([0-9]{1,})',basicAuth, deleteCats);

// Finally, define the exported object when import from other scripts.
export { router };