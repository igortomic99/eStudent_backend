import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutExamsInput } from "../inputs/StudentCreateWithoutExamsInput";
import { StudentUpdateWithoutExamsInput } from "../inputs/StudentUpdateWithoutExamsInput";

@TypeGraphQL.InputType("StudentUpsertWithoutExamsInput", {
  isAbstract: true
})
export class StudentUpsertWithoutExamsInput {
  @TypeGraphQL.Field(_type => StudentUpdateWithoutExamsInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutExamsInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutExamsInput, {
    nullable: false
  })
  create!: StudentCreateWithoutExamsInput;
}
