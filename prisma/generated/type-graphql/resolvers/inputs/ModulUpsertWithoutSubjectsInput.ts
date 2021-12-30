import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateWithoutSubjectsInput } from "../inputs/ModulCreateWithoutSubjectsInput";
import { ModulUpdateWithoutSubjectsInput } from "../inputs/ModulUpdateWithoutSubjectsInput";

@TypeGraphQL.InputType("ModulUpsertWithoutSubjectsInput", {
  isAbstract: true
})
export class ModulUpsertWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ModulUpdateWithoutSubjectsInput, {
    nullable: false
  })
  update!: ModulUpdateWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => ModulCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: ModulCreateWithoutSubjectsInput;
}
