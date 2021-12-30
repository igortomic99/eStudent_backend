import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateOrConnectWithoutStudentsInput } from "../inputs/ModulCreateOrConnectWithoutStudentsInput";
import { ModulCreateWithoutStudentsInput } from "../inputs/ModulCreateWithoutStudentsInput";
import { ModulUpdateWithoutStudentsInput } from "../inputs/ModulUpdateWithoutStudentsInput";
import { ModulUpsertWithoutStudentsInput } from "../inputs/ModulUpsertWithoutStudentsInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulUpdateOneRequiredWithoutStudentsInput", {
  isAbstract: true
})
export class ModulUpdateOneRequiredWithoutStudentsInput {
  @TypeGraphQL.Field(_type => ModulCreateWithoutStudentsInput, {
    nullable: true
  })
  create?: ModulCreateWithoutStudentsInput | undefined;

  @TypeGraphQL.Field(_type => ModulCreateOrConnectWithoutStudentsInput, {
    nullable: true
  })
  connectOrCreate?: ModulCreateOrConnectWithoutStudentsInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpsertWithoutStudentsInput, {
    nullable: true
  })
  upsert?: ModulUpsertWithoutStudentsInput | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  connect?: ModulWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpdateWithoutStudentsInput, {
    nullable: true
  })
  update?: ModulUpdateWithoutStudentsInput | undefined;
}
