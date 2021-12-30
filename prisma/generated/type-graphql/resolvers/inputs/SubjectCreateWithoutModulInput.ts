import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateNestedOneWithoutSubjectInput } from "../inputs/ExamCreateNestedOneWithoutSubjectInput";
import { ProfessorCreateNestedOneWithoutSubjectsInput } from "../inputs/ProfessorCreateNestedOneWithoutSubjectsInput";
import { SubjectType } from "../../enums/SubjectType";

@TypeGraphQL.InputType("SubjectCreateWithoutModulInput", {
  isAbstract: true
})
export class SubjectCreateWithoutModulInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subjectName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  espp!: number;

  @TypeGraphQL.Field(_type => SubjectType, {
    nullable: false
  })
  type!: "REQUIRED" | "ELECTIVE";

  @TypeGraphQL.Field(_type => ProfessorCreateNestedOneWithoutSubjectsInput, {
    nullable: false
  })
  professor!: ProfessorCreateNestedOneWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => ExamCreateNestedOneWithoutSubjectInput, {
    nullable: true
  })
  exam?: ExamCreateNestedOneWithoutSubjectInput | undefined;
}
