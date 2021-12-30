import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordWhereInput } from "../../../inputs/ExamRecordWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  where?: ExamRecordWhereInput | undefined;
}
