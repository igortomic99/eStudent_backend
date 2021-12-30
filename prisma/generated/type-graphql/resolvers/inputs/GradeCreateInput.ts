import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateNestedOneWithoutGradeInput } from "../inputs/ExamRecordCreateNestedOneWithoutGradeInput";

@TypeGraphQL.InputType("GradeCreateInput", {
  isAbstract: true
})
export class GradeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => ExamRecordCreateNestedOneWithoutGradeInput, {
    nullable: true
  })
  exam?: ExamRecordCreateNestedOneWithoutGradeInput | undefined;
}
