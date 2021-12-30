import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GradeCreateOrConnectWithoutExamInput } from "../inputs/GradeCreateOrConnectWithoutExamInput";
import { GradeCreateWithoutExamInput } from "../inputs/GradeCreateWithoutExamInput";
import { GradeWhereUniqueInput } from "../inputs/GradeWhereUniqueInput";

@TypeGraphQL.InputType("GradeCreateNestedOneWithoutExamInput", {
  isAbstract: true
})
export class GradeCreateNestedOneWithoutExamInput {
  @TypeGraphQL.Field(_type => GradeCreateWithoutExamInput, {
    nullable: true
  })
  create?: GradeCreateWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => GradeCreateOrConnectWithoutExamInput, {
    nullable: true
  })
  connectOrCreate?: GradeCreateOrConnectWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => GradeWhereUniqueInput, {
    nullable: true
  })
  connect?: GradeWhereUniqueInput | undefined;
}
