import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GradeCreateWithoutExamInput } from "../inputs/GradeCreateWithoutExamInput";
import { GradeUpdateWithoutExamInput } from "../inputs/GradeUpdateWithoutExamInput";

@TypeGraphQL.InputType("GradeUpsertWithoutExamInput", {
  isAbstract: true
})
export class GradeUpsertWithoutExamInput {
  @TypeGraphQL.Field(_type => GradeUpdateWithoutExamInput, {
    nullable: false
  })
  update!: GradeUpdateWithoutExamInput;

  @TypeGraphQL.Field(_type => GradeCreateWithoutExamInput, {
    nullable: false
  })
  create!: GradeCreateWithoutExamInput;
}
