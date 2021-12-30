import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GradeCreateWithoutExamInput } from "../inputs/GradeCreateWithoutExamInput";
import { GradeWhereUniqueInput } from "../inputs/GradeWhereUniqueInput";

@TypeGraphQL.InputType("GradeCreateOrConnectWithoutExamInput", {
  isAbstract: true
})
export class GradeCreateOrConnectWithoutExamInput {
  @TypeGraphQL.Field(_type => GradeWhereUniqueInput, {
    nullable: false
  })
  where!: GradeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GradeCreateWithoutExamInput, {
    nullable: false
  })
  create!: GradeCreateWithoutExamInput;
}
