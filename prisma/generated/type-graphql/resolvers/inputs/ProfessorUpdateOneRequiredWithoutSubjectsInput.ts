import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateOrConnectWithoutSubjectsInput } from "../inputs/ProfessorCreateOrConnectWithoutSubjectsInput";
import { ProfessorCreateWithoutSubjectsInput } from "../inputs/ProfessorCreateWithoutSubjectsInput";
import { ProfessorUpdateWithoutSubjectsInput } from "../inputs/ProfessorUpdateWithoutSubjectsInput";
import { ProfessorUpsertWithoutSubjectsInput } from "../inputs/ProfessorUpsertWithoutSubjectsInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpdateOneRequiredWithoutSubjectsInput", {
  isAbstract: true
})
export class ProfessorUpdateOneRequiredWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ProfessorCreateWithoutSubjectsInput, {
    nullable: true
  })
  create?: ProfessorCreateWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateOrConnectWithoutSubjectsInput, {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpsertWithoutSubjectsInput, {
    nullable: true
  })
  upsert?: ProfessorUpsertWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfessorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutSubjectsInput, {
    nullable: true
  })
  update?: ProfessorUpdateWithoutSubjectsInput | undefined;
}
