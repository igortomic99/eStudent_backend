import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodWhereInput } from "../inputs/ExaminationPeriodWhereInput";

@TypeGraphQL.InputType("ExaminationPeriodRelationFilter", {
  isAbstract: true
})
export class ExaminationPeriodRelationFilter {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  is?: ExaminationPeriodWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  isNot?: ExaminationPeriodWhereInput | undefined;
}
