import "reflect-metadata";
import Koa from "koa";
import koaRouter from "koa-router";
import koaBody from "koa-body";
import helmet from "koa-helmet";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-koa"

import { rootRouter } from "./routes";

const app = new Koa();

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + "/api/resolvers/**/*.resolver.ts"],
  });

  const server = new ApolloServer({
    schema,
    debug: true,
  });

  const routes = new koaRouter().use("/", rootRouter.routes());

  app
    .use(helmet())
    .use(koaBody())
    .use(routes.routes())
    .use(routes.allowedMethods());

  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT || 3002;

  app.listen(port);

  console.log(`Server running on http://localhost:${port}`);
};

bootstrap();
