import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordCreateInput } from "../../../inputs/ExamRecordCreateInput";

@TypeGraphQL.ArgsType()
export class CreateExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordCreateInput, {
    nullable: false
  })
  data!: ExamRecordCreateInput;
}
