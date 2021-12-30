import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateNestedManyWithoutExaminationPeriodInput } from "../inputs/ExamCreateNestedManyWithoutExaminationPeriodInput";
import { ModulCreateNestedOneWithoutExaminationPeriodInput } from "../inputs/ModulCreateNestedOneWithoutExaminationPeriodInput";

@TypeGraphQL.InputType("ExaminationPeriodCreateInput", {
  isAbstract: true
})
export class ExaminationPeriodCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  beginningDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => ModulCreateNestedOneWithoutExaminationPeriodInput, {
    nullable: true
  })
  modul?: ModulCreateNestedOneWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => ExamCreateNestedManyWithoutExaminationPeriodInput, {
    nullable: true
  })
  exams?: ExamCreateNestedManyWithoutExaminationPeriodInput | undefined;
}
