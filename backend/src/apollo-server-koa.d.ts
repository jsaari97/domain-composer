import { ApolloServer as _ApolloServer } from 'apollo-server';

declare module 'apollo-server-koa' {
  export class ApolloServer extends _ApolloServer {}
}

