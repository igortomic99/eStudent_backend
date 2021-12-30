import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodCreateInput } from "../../../inputs/ExaminationPeriodCreateInput";
import { ExaminationPeriodUpdateInput } from "../../../inputs/ExaminationPeriodUpdateInput";
import { ExaminationPeriodWhereUniqueInput } from "../../../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateInput, {
    nullable: false
  })
  create!: ExaminationPeriodCreateInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateInput, {
    nullable: false
  })
  update!: ExaminationPeriodUpdateInput;
}
