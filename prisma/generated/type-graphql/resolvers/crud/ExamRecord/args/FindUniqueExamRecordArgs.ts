import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordWhereUniqueInput } from "../../../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;
}
