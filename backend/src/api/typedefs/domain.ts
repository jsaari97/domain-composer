import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Domain {
  @Field()
  full!: string;

  @Field()
  name!: string;

  @Field()
  tld!: string;
}
