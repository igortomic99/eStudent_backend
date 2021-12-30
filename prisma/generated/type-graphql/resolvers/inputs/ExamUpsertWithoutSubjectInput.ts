import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateWithoutSubjectInput } from "../inputs/ExamCreateWithoutSubjectInput";
import { ExamUpdateWithoutSubjectInput } from "../inputs/ExamUpdateWithoutSubjectInput";

@TypeGraphQL.InputType("ExamUpsertWithoutSubjectInput", {
  isAbstract: true
})
export class ExamUpsertWithoutSubjectInput {
  @TypeGraphQL.Field(_type => ExamUpdateWithoutSubjectInput, {
    nullable: false
  })
  update!: ExamUpdateWithoutSubjectInput;

  @TypeGraphQL.Field(_type => ExamCreateWithoutSubjectInput, {
    nullable: false
  })
  create!: ExamCreateWithoutSubjectInput;
}
