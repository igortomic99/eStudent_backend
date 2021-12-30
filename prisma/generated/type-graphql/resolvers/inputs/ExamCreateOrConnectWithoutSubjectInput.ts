import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateWithoutSubjectInput } from "../inputs/ExamCreateWithoutSubjectInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamCreateOrConnectWithoutSubjectInput", {
  isAbstract: true
})
export class ExamCreateOrConnectWithoutSubjectInput {
  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: false
  })
  where!: ExamWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamCreateWithoutSubjectInput, {
    nullable: false
  })
  create!: ExamCreateWithoutSubjectInput;
}
