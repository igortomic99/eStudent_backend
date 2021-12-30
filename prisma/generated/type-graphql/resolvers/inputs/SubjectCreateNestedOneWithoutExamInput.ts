import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateOrConnectWithoutExamInput } from "../inputs/SubjectCreateOrConnectWithoutExamInput";
import { SubjectCreateWithoutExamInput } from "../inputs/SubjectCreateWithoutExamInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateNestedOneWithoutExamInput", {
  isAbstract: true
})
export class SubjectCreateNestedOneWithoutExamInput {
  @TypeGraphQL.Field(_type => SubjectCreateWithoutExamInput, {
    nullable: true
  })
  create?: SubjectCreateWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateOrConnectWithoutExamInput, {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput | undefined;
}
