import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectUpdateWithoutModulInput } from "../inputs/SubjectUpdateWithoutModulInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateWithWhereUniqueWithoutModulInput", {
  isAbstract: true
})
export class SubjectUpdateWithWhereUniqueWithoutModulInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutModulInput, {
    nullable: false
  })
  data!: SubjectUpdateWithoutModulInput;
}
