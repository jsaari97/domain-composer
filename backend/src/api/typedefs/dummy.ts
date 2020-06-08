import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Dummy {
  @Field()
  hello!: string;
}
