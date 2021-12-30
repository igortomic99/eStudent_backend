import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodUpdateManyMutationInput } from "../../../inputs/ExaminationPeriodUpdateManyMutationInput";
import { ExaminationPeriodWhereInput } from "../../../inputs/ExaminationPeriodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExaminationPeriodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  where?: ExaminationPeriodWhereInput | undefined;
}
