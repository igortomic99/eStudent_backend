import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutClassInput } from "../inputs/StudentCreateWithoutClassInput";
import { StudentUpdateWithoutClassInput } from "../inputs/StudentUpdateWithoutClassInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpsertWithWhereUniqueWithoutClassInput", {
  isAbstract: true
})
export class StudentUpsertWithWhereUniqueWithoutClassInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutClassInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutClassInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutClassInput, {
    nullable: false
  })
  create!: StudentCreateWithoutClassInput;
}
