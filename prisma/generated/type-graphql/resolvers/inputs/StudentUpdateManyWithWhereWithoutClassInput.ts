import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyMutationInput } from "../inputs/StudentUpdateManyMutationInput";

@TypeGraphQL.InputType("StudentUpdateManyWithWhereWithoutClassInput", {
  isAbstract: true
})
export class StudentUpdateManyWithWhereWithoutClassInput {
  @TypeGraphQL.Field(_type => StudentScalarWhereInput, {
    nullable: false
  })
  where!: StudentScalarWhereInput;

  @TypeGraphQL.Field(_type => StudentUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudentUpdateManyMutationInput;
}
