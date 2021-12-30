import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateOrConnectWithoutExaminationPeriodInput } from "../inputs/ModulCreateOrConnectWithoutExaminationPeriodInput";
import { ModulCreateWithoutExaminationPeriodInput } from "../inputs/ModulCreateWithoutExaminationPeriodInput";
import { ModulUpdateWithoutExaminationPeriodInput } from "../inputs/ModulUpdateWithoutExaminationPeriodInput";
import { ModulUpsertWithoutExaminationPeriodInput } from "../inputs/ModulUpsertWithoutExaminationPeriodInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulUpdateOneWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ModulUpdateOneWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ModulCreateWithoutExaminationPeriodInput, {
    nullable: true
  })
  create?: ModulCreateWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => ModulCreateOrConnectWithoutExaminationPeriodInput, {
    nullable: true
  })
  connectOrCreate?: ModulCreateOrConnectWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpsertWithoutExaminationPeriodInput, {
    nullable: true
  })
  upsert?: ModulUpsertWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  connect?: ModulWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpdateWithoutExaminationPeriodInput, {
    nullable: true
  })
  update?: ModulUpdateWithoutExaminationPeriodInput | undefined;
}
