import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamOrderByRelationAggregateInput } from "../inputs/ExamOrderByRelationAggregateInput";
import { ModulOrderByWithRelationInput } from "../inputs/ModulOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExaminationPeriodOrderByWithRelationInput", {
  isAbstract: true
})
export class ExaminationPeriodOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  beginningDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ModulOrderByWithRelationInput, {
    nullable: true
  })
  modul?: ModulOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modulID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExamOrderByRelationAggregateInput, {
    nullable: true
  })
  exams?: ExamOrderByRelationAggregateInput | undefined;
}
