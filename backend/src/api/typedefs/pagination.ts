import { ClassType, Field, ObjectType, Int } from "type-graphql";

@ObjectType({ isAbstract: true })
abstract class PageInfo {
  @Field((type) => Int)
  endCursor!: number;

  @Field((type) => Boolean)
  hasMore!: boolean;
}

export default function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field((type) => [TItemClass])
    edges!: TItem[];

    @Field((type) => Int)
    total!: number;

    @Field((type) => PageInfo)
    pageInfo!: PageInfo;
  }

  return PaginatedResponseClass;
}
