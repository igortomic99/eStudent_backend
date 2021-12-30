import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateOrConnectWithoutSubjectInput } from "../inputs/ExamCreateOrConnectWithoutSubjectInput";
import { ExamCreateWithoutSubjectInput } from "../inputs/ExamCreateWithoutSubjectInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamCreateNestedOneWithoutSubjectInput", {
  isAbstract: true
})
export class ExamCreateNestedOneWithoutSubjectInput {
  @TypeGraphQL.Field(_type => ExamCreateWithoutSubjectInput, {
    nullable: true
  })
  create?: ExamCreateWithoutSubjectInput | undefined;

  @TypeGraphQL.Field(_type => ExamCreateOrConnectWithoutSubjectInput, {
    nullable: true
  })
  connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | undefined;

  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamWhereUniqueInput | undefined;
}
