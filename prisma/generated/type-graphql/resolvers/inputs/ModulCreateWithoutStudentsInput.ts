import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateNestedManyWithoutModulInput } from "../inputs/ExaminationPeriodCreateNestedManyWithoutModulInput";
import { SubjectCreateNestedManyWithoutModulInput } from "../inputs/SubjectCreateNestedManyWithoutModulInput";

@TypeGraphQL.InputType("ModulCreateWithoutStudentsInput", {
  isAbstract: true
})
export class ModulCreateWithoutStudentsInput {
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

  @TypeGraphQL.Field(_type => SubjectCreateNestedManyWithoutModulInput, {
    nullable: true
  })
  subjects?: SubjectCreateNestedManyWithoutModulInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateNestedManyWithoutModulInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodCreateNestedManyWithoutModulInput | undefined;
}
