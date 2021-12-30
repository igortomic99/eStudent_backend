import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateOrConnectWithoutSubjectsInput } from "../inputs/ModulCreateOrConnectWithoutSubjectsInput";
import { ModulCreateWithoutSubjectsInput } from "../inputs/ModulCreateWithoutSubjectsInput";
import { ModulUpdateWithoutSubjectsInput } from "../inputs/ModulUpdateWithoutSubjectsInput";
import { ModulUpsertWithoutSubjectsInput } from "../inputs/ModulUpsertWithoutSubjectsInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulUpdateOneRequiredWithoutSubjectsInput", {
  isAbstract: true
})
export class ModulUpdateOneRequiredWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ModulCreateWithoutSubjectsInput, {
    nullable: true
  })
  create?: ModulCreateWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ModulCreateOrConnectWithoutSubjectsInput, {
    nullable: true
  })
  connectOrCreate?: ModulCreateOrConnectWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpsertWithoutSubjectsInput, {
    nullable: true
  })
  upsert?: ModulUpsertWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  connect?: ModulWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpdateWithoutSubjectsInput, {
    nullable: true
  })
  update?: ModulUpdateWithoutSubjectsInput | undefined;
}
