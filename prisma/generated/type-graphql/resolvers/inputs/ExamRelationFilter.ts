import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamWhereInput } from "../inputs/ExamWhereInput";

@TypeGraphQL.InputType("ExamRelationFilter", {
  isAbstract: true
})
export class ExamRelationFilter {
  @TypeGraphQL.Field(_type => ExamWhereInput, {
    nullable: true
  })
  is?: ExamWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExamWhereInput, {
    nullable: true
  })
  isNot?: ExamWhereInput | undefined;
}
