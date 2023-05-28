import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/filter';


const router = new Router({prefix: '/api/v1/filter'});

const getAllByFilter = async (ctx: RouterContext, next: any) => {
    let filter: any = ctx.request.body;
    let filter_cats = await model.getAllByFilter(filter);
    if (filter_cats.length) {
      ctx.status = 201;
      ctx.body = filter_cats;
    } else {
       ctx.body = {}
    }
    await next();
}

router.post('/', bodyParser(), getAllByFilter);

export { router };
