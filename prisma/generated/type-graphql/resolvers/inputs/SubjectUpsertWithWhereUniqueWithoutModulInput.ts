import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutModulInput } from "../inputs/SubjectCreateWithoutModulInput";
import { SubjectUpdateWithoutModulInput } from "../inputs/SubjectUpdateWithoutModulInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpsertWithWhereUniqueWithoutModulInput", {
  isAbstract: true
})
export class SubjectUpsertWithWhereUniqueWithoutModulInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutModulInput, {
    nullable: false
  })
  update!: SubjectUpdateWithoutModulInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutModulInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutModulInput;
}
