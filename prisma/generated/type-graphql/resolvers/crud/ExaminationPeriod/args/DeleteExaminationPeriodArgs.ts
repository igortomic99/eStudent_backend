import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodWhereUniqueInput } from "../../../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;
}
