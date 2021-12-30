import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodOrderByRelationAggregateInput } from "../inputs/ExaminationPeriodOrderByRelationAggregateInput";
import { StudentOrderByRelationAggregateInput } from "../inputs/StudentOrderByRelationAggregateInput";
import { SubjectOrderByRelationAggregateInput } from "../inputs/SubjectOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ModulOrderByWithRelationInput", {
  isAbstract: true
})
export class ModulOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  moduleName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  moduleCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentOrderByRelationAggregateInput, {
    nullable: true
  })
  students?: StudentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectOrderByRelationAggregateInput, {
    nullable: true
  })
  subjects?: SubjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodOrderByRelationAggregateInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodOrderByRelationAggregateInput | undefined;
}
