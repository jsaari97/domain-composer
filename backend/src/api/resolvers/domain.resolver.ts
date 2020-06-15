import { Resolver, Query } from "type-graphql";
import { Domain } from "../typedefs/domain";

@Resolver()
class DomainResolver {
  @Query((returns) => Domain)
  async domain(): Promise<Domain> {
    return {
      full: "example.app",
      name: "example",
      tld: "app",
    };
  }

  @Query((returns) => [Domain])
  async domains(): Promise<Domain[]> {
    return [
      {
        full: "example.app",
        name: "example",
        tld: "app",
      },
    ];
  }
}

export default DomainResolver;
