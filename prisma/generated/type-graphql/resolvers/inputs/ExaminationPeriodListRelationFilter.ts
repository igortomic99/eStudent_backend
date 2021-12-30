import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodWhereInput } from "../inputs/ExaminationPeriodWhereInput";

@TypeGraphQL.InputType("ExaminationPeriodListRelationFilter", {
  isAbstract: true
})
export class ExaminationPeriodListRelationFilter {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  every?: ExaminationPeriodWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  some?: ExaminationPeriodWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  none?: ExaminationPeriodWhereInput | undefined;
}
