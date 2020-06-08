import Router from "koa-router";

export const rootRouter = new Router().get("/", (ctx) => {
  ctx.body = "Hello World!";
});
