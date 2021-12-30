import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassCreateOrConnectWithoutSudentsInput } from "../inputs/ClassCreateOrConnectWithoutSudentsInput";
import { ClassCreateWithoutSudentsInput } from "../inputs/ClassCreateWithoutSudentsInput";
import { ClassUpdateWithoutSudentsInput } from "../inputs/ClassUpdateWithoutSudentsInput";
import { ClassUpsertWithoutSudentsInput } from "../inputs/ClassUpsertWithoutSudentsInput";
import { ClassWhereUniqueInput } from "../inputs/ClassWhereUniqueInput";

@TypeGraphQL.InputType("ClassUpdateOneRequiredWithoutSudentsInput", {
  isAbstract: true
})
export class ClassUpdateOneRequiredWithoutSudentsInput {
  @TypeGraphQL.Field(_type => ClassCreateWithoutSudentsInput, {
    nullable: true
  })
  create?: ClassCreateWithoutSudentsInput | undefined;

  @TypeGraphQL.Field(_type => ClassCreateOrConnectWithoutSudentsInput, {
    nullable: true
  })
  connectOrCreate?: ClassCreateOrConnectWithoutSudentsInput | undefined;

  @TypeGraphQL.Field(_type => ClassUpsertWithoutSudentsInput, {
    nullable: true
  })
  upsert?: ClassUpsertWithoutSudentsInput | undefined;

  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: true
  })
  connect?: ClassWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClassUpdateWithoutSudentsInput, {
    nullable: true
  })
  update?: ClassUpdateWithoutSudentsInput | undefined;
}
