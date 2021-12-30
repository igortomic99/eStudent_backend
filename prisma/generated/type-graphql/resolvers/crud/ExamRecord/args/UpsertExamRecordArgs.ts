import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordCreateInput } from "../../../inputs/ExamRecordCreateInput";
import { ExamRecordUpdateInput } from "../../../inputs/ExamRecordUpdateInput";
import { ExamRecordWhereUniqueInput } from "../../../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateInput, {
    nullable: false
  })
  create!: ExamRecordCreateInput;

  @TypeGraphQL.Field(_type => ExamRecordUpdateInput, {
    nullable: false
  })
  update!: ExamRecordUpdateInput;
}
