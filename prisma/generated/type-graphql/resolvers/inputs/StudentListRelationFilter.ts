import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentWhereInput } from "../inputs/StudentWhereInput";

@TypeGraphQL.InputType("StudentListRelationFilter", {
  isAbstract: true
})
export class StudentListRelationFilter {
  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true
  })
  every?: StudentWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true
  })
  some?: StudentWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true
  })
  none?: StudentWhereInput | undefined;
}
