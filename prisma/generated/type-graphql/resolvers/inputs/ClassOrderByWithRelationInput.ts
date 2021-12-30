import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentOrderByRelationAggregateInput } from "../inputs/StudentOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClassOrderByWithRelationInput", {
  isAbstract: true
})
export class ClassOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  classLabel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentOrderByRelationAggregateInput, {
    nullable: true
  })
  sudents?: StudentOrderByRelationAggregateInput | undefined;
}
