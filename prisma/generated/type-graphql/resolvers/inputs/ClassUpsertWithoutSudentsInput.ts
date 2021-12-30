import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassCreateWithoutSudentsInput } from "../inputs/ClassCreateWithoutSudentsInput";
import { ClassUpdateWithoutSudentsInput } from "../inputs/ClassUpdateWithoutSudentsInput";

@TypeGraphQL.InputType("ClassUpsertWithoutSudentsInput", {
  isAbstract: true
})
export class ClassUpsertWithoutSudentsInput {
  @TypeGraphQL.Field(_type => ClassUpdateWithoutSudentsInput, {
    nullable: false
  })
  update!: ClassUpdateWithoutSudentsInput;

  @TypeGraphQL.Field(_type => ClassCreateWithoutSudentsInput, {
    nullable: false
  })
  create!: ClassCreateWithoutSudentsInput;
}
