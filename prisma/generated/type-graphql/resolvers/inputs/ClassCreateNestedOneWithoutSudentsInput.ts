import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassCreateOrConnectWithoutSudentsInput } from "../inputs/ClassCreateOrConnectWithoutSudentsInput";
import { ClassCreateWithoutSudentsInput } from "../inputs/ClassCreateWithoutSudentsInput";
import { ClassWhereUniqueInput } from "../inputs/ClassWhereUniqueInput";

@TypeGraphQL.InputType("ClassCreateNestedOneWithoutSudentsInput", {
  isAbstract: true
})
export class ClassCreateNestedOneWithoutSudentsInput {
  @TypeGraphQL.Field(_type => ClassCreateWithoutSudentsInput, {
    nullable: true
  })
  create?: ClassCreateWithoutSudentsInput | undefined;

  @TypeGraphQL.Field(_type => ClassCreateOrConnectWithoutSudentsInput, {
    nullable: true
  })
  connectOrCreate?: ClassCreateOrConnectWithoutSudentsInput | undefined;

  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: true
  })
  connect?: ClassWhereUniqueInput | undefined;
}
