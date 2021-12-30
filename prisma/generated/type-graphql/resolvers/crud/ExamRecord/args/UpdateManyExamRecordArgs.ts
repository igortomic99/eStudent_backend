import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordUpdateManyMutationInput } from "../../../inputs/ExamRecordUpdateManyMutationInput";
import { ExamRecordWhereInput } from "../../../inputs/ExamRecordWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExamRecordUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  where?: ExamRecordWhereInput | undefined;
}
