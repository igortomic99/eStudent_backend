import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutModulInput } from "../inputs/SubjectCreateWithoutModulInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateOrConnectWithoutModulInput", {
  isAbstract: true
})
export class SubjectCreateOrConnectWithoutModulInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutModulInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutModulInput;
}
