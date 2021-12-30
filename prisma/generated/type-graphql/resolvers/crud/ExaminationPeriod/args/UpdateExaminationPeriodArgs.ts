import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodUpdateInput } from "../../../inputs/ExaminationPeriodUpdateInput";
import { ExaminationPeriodWhereUniqueInput } from "../../../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateInput, {
    nullable: false
  })
  data!: ExaminationPeriodUpdateInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;
}
