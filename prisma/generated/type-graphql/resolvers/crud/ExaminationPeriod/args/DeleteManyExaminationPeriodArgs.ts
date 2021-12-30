import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodWhereInput } from "../../../inputs/ExaminationPeriodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  where?: ExaminationPeriodWhereInput | undefined;
}
