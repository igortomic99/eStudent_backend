import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateNestedOneWithoutExamRecordInput } from "../inputs/ExamCreateNestedOneWithoutExamRecordInput";
import { StudentCreateNestedOneWithoutExamsInput } from "../inputs/StudentCreateNestedOneWithoutExamsInput";

@TypeGraphQL.InputType("ExamRecordCreateWithoutGradeInput", {
  isAbstract: true
})
export class ExamRecordCreateWithoutGradeInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  points?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  passed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  singed?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExamCreateNestedOneWithoutExamRecordInput, {
    nullable: true
  })
  exam?: ExamCreateNestedOneWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutExamsInput, {
    nullable: true
  })
  student?: StudentCreateNestedOneWithoutExamsInput | undefined;
}
