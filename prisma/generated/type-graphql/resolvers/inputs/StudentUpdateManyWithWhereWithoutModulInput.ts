import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyMutationInput } from "../inputs/StudentUpdateManyMutationInput";

@TypeGraphQL.InputType("StudentUpdateManyWithWhereWithoutModulInput", {
  isAbstract: true
})
export class StudentUpdateManyWithWhereWithoutModulInput {
  @TypeGraphQL.Field(_type => StudentScalarWhereInput, {
    nullable: false
  })
  where!: StudentScalarWhereInput;

  @TypeGraphQL.Field(_type => StudentUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentUpdateManyMutationInput;
}
