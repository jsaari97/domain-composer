import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Domain {
  @Field({ description: "The full domain name." })
  full!: string;

  @Field({ description: "The domain name" })
  name!: string;

  @Field({ description: "Top-level domain, eg. com, org or net." })
  tld!: string;
}
