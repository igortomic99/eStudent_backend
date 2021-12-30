import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateWithoutModulInput } from "../inputs/StudentCreateWithoutModulInput";
import { StudentUpdateWithoutModulInput } from "../inputs/StudentUpdateWithoutModulInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpsertWithWhereUniqueWithoutModulInput", {
  isAbstract: true
})
export class StudentUpsertWithWhereUniqueWithoutModulInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutModulInput, {
    nullable: false
  })
  update!: StudentUpdateWithoutModulInput;

  @TypeGraphQL.Field(_type => StudentCreateWithoutModulInput, {
    nullable: false
  })
  create!: StudentCreateWithoutModulInput;
}
