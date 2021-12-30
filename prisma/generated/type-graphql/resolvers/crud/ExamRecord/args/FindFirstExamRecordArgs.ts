import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordOrderByWithRelationInput } from "../../../inputs/ExamRecordOrderByWithRelationInput";
import { ExamRecordWhereInput } from "../../../inputs/ExamRecordWhereInput";
import { ExamRecordWhereUniqueInput } from "../../../inputs/ExamRecordWhereUniqueInput";
import { ExamRecordScalarFieldEnum } from "../../../../enums/ExamRecordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  where?: ExamRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExamRecordOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExamRecordWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "points" | "passed" | "gradeID" | "examID" | "studentID" | "singed"> | undefined;
}
