import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassCreateWithoutSudentsInput } from "../inputs/ClassCreateWithoutSudentsInput";
import { ClassWhereUniqueInput } from "../inputs/ClassWhereUniqueInput";

@TypeGraphQL.InputType("ClassCreateOrConnectWithoutSudentsInput", {
  isAbstract: true
})
export class ClassCreateOrConnectWithoutSudentsInput {
  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: false
  })
  where!: ClassWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClassCreateWithoutSudentsInput, {
    nullable: false
  })
  create!: ClassCreateWithoutSudentsInput;
}
