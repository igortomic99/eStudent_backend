import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentUpdateWithoutModulInput } from "../inputs/StudentUpdateWithoutModulInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateWithWhereUniqueWithoutModulInput", {
  isAbstract: true
})
export class StudentUpdateWithWhereUniqueWithoutModulInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutModulInput, {
    nullable: false
  })
  data!: StudentUpdateWithoutModulInput;
}
