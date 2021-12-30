import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateManyModulInput } from "../inputs/ExaminationPeriodCreateManyModulInput";

@TypeGraphQL.InputType("ExaminationPeriodCreateManyModulInputEnvelope", {
  isAbstract: true
})
export class ExaminationPeriodCreateManyModulInputEnvelope {
  @TypeGraphQL.Field(_type => [ExaminationPeriodCreateManyModulInput], {
    nullable: false
  })
  data!: ExaminationPeriodCreateManyModulInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
