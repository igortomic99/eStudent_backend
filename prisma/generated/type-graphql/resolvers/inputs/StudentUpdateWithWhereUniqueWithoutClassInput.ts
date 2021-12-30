import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentUpdateWithoutClassInput } from "../inputs/StudentUpdateWithoutClassInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateWithWhereUniqueWithoutClassInput", {
  isAbstract: true
})
export class StudentUpdateWithWhereUniqueWithoutClassInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutClassInput, {
    nullable: false
  })
  data!: StudentUpdateWithoutClassInput;
}
