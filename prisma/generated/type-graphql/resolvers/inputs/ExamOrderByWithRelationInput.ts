import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordOrderByWithRelationInput } from "../inputs/ExamRecordOrderByWithRelationInput";
import { ExaminationPeriodOrderByWithRelationInput } from "../inputs/ExaminationPeriodOrderByWithRelationInput";
import { SubjectOrderByWithRelationInput } from "../inputs/SubjectOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExamOrderByWithRelationInput", {
  isAbstract: true
})
export class ExamOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubjectOrderByWithRelationInput, {
    nullable: true
  })
  subject?: SubjectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subjectID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodOrderByWithRelationInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exPeriodID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExamRecordOrderByWithRelationInput, {
    nullable: true
  })
  examRecord?: ExamRecordOrderByWithRelationInput | undefined;
}
