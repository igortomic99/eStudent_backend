import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordCreateManyInput } from "../../../inputs/ExamRecordCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExamRecordArgs {
  @TypeGraphQL.Field(_type => [ExamRecordCreateManyInput], {
    nullable: false
  })
  data!: ExamRecordCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
