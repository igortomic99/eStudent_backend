import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordUpdateInput } from "../../../inputs/ExamRecordUpdateInput";
import { ExamRecordWhereUniqueInput } from "../../../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordUpdateInput, {
    nullable: false
  })
  data!: ExamRecordUpdateInput;

  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;
}
