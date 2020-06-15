import { Resolver, Query, Arg, Int, ObjectType } from "type-graphql";
import { Domain } from "../typedefs/domain";
import PaginatedResponse from "../typedefs/pagination";

const domains: Domain[] = new Array(100);

const example = {
  full: "example.app",
  name: "example",
  tld: "app",
};

for (let i = 0; i < domains.length; i++) {
  domains[i] = example;
}

@ObjectType()
class DomainsResponse extends PaginatedResponse(Domain) {}

@Resolver()
class DomainResolver {
  @Query((returns) => Domain)
  async domain(): Promise<Domain> {
    return example
  }

  @Query((returns) => DomainsResponse)
  async domains(
    @Arg("first", (type) => Int, { nullable: true, defaultValue: 10 })
    first: number,
    @Arg("offset", (type) => Int, { nullable: true, defaultValue: 0 })
    offset: number
  ): Promise<DomainsResponse> {
    const edges = domains.slice(offset, offset + first);

    return {
      edges,
      pageInfo: {
        hasMore: offset + first < domains.length,
        endCursor: offset + first,
      },
      total: domains.length,
    };
  }
}

export default DomainResolver;
