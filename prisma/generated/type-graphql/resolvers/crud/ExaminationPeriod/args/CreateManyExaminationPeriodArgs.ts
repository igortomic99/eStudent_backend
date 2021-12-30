import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodCreateManyInput } from "../../../inputs/ExaminationPeriodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => [ExaminationPeriodCreateManyInput], {
    nullable: false
  })
  data!: ExaminationPeriodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
