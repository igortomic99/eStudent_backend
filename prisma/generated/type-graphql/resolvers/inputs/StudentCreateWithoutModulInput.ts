import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassCreateNestedOneWithoutSudentsInput } from "../inputs/ClassCreateNestedOneWithoutSudentsInput";
import { ExamRecordCreateNestedManyWithoutStudentInput } from "../inputs/ExamRecordCreateNestedManyWithoutStudentInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("StudentCreateWithoutModulInput", {
  isAbstract: true
})
export class StudentCreateWithoutModulInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  middleName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  jmbg!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brind!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  birthDate!: Date;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "ADMIN" | "STUDENT" | "PROFESSOR" | undefined;

  @TypeGraphQL.Field(_type => ClassCreateNestedOneWithoutSudentsInput, {
    nullable: false
  })
  class!: ClassCreateNestedOneWithoutSudentsInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  exams?: ExamRecordCreateNestedManyWithoutStudentInput | undefined;
}