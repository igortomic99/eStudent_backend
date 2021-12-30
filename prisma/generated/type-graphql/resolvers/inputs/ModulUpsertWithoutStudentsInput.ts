import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateWithoutStudentsInput } from "../inputs/ModulCreateWithoutStudentsInput";
import { ModulUpdateWithoutStudentsInput } from "../inputs/ModulUpdateWithoutStudentsInput";

@TypeGraphQL.InputType("ModulUpsertWithoutStudentsInput", {
  isAbstract: true
})
export class ModulUpsertWithoutStudentsInput {
  @TypeGraphQL.Field(_type => ModulUpdateWithoutStudentsInput, {
    nullable: false
  })
  update!: ModulUpdateWithoutStudentsInput;

  @TypeGraphQL.Field(_type => ModulCreateWithoutStudentsInput, {
    nullable: false
  })
  create!: ModulCreateWithoutStudentsInput;
}
