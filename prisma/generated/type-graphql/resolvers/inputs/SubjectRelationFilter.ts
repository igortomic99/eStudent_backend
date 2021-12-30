import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectWhereInput } from "../inputs/SubjectWhereInput";

@TypeGraphQL.InputType("SubjectRelationFilter", {
  isAbstract: true
})
export class SubjectRelationFilter {
  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  is?: SubjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  isNot?: SubjectWhereInput | undefined;
}
