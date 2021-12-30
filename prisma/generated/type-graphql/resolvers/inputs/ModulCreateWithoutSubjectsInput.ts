import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateNestedManyWithoutModulInput } from "../inputs/ExaminationPeriodCreateNestedManyWithoutModulInput";
import { StudentCreateNestedManyWithoutModulInput } from "../inputs/StudentCreateNestedManyWithoutModulInput";

@TypeGraphQL.InputType("ModulCreateWithoutSubjectsInput", {
  isAbstract: true
})
export class ModulCreateWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  moduleName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  moduleCode!: string;

  @TypeGraphQL.Field(_type => StudentCreateNestedManyWithoutModulInput, {
    nullable: true
  })
  students?: StudentCreateNestedManyWithoutModulInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateNestedManyWithoutModulInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodCreateNestedManyWithoutModulInput | undefined;
}
