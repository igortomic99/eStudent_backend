import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectWhereInput } from "../inputs/SubjectWhereInput";

@TypeGraphQL.InputType("SubjectListRelationFilter", {
  isAbstract: true
})
export class SubjectListRelationFilter {
  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  every?: SubjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  some?: SubjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  none?: SubjectWhereInput | undefined;
}
