import { Resolver, Query } from "type-graphql";
import { Dummy } from "../typedefs/dummy";

@Resolver()
class RecipeResolver {
  @Query((returns) => Dummy)
  async dummy(): Promise<Dummy> {
    return {
      hello: "world",
    };
  }
}

export default RecipeResolver;
