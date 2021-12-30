import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodCreateInput } from "../../../inputs/ExaminationPeriodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodCreateInput, {
    nullable: false
  })
  data!: ExaminationPeriodCreateInput;
}
