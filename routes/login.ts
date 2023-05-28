import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/login';


const router = new Router({prefix: '/api/v1/login'});

const login = async (ctx: RouterContext, next: any) => {
    let user: any = ctx.request.body;
    let get_user = await model.login(user);
    if (get_user.length) {
      ctx.status = 201;
      ctx.body = get_user;
    } else {
       ctx.body = {}
    }
    await next();
}

router.post('/', bodyParser(), login);


export { router };
