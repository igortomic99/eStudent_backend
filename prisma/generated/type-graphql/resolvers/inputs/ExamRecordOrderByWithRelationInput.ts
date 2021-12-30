import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamOrderByWithRelationInput } from "../inputs/ExamOrderByWithRelationInput";
import { GradeOrderByWithRelationInput } from "../inputs/GradeOrderByWithRelationInput";
import { StudentOrderByWithRelationInput } from "../inputs/StudentOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExamRecordOrderByWithRelationInput", {
  isAbstract: true
})
export class ExamRecordOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  points?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  passed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GradeOrderByWithRelationInput, {
    nullable: true
  })
  grade?: GradeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gradeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExamOrderByWithRelationInput, {
    nullable: true
  })
  exam?: ExamOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  examID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentOrderByWithRelationInput, {
    nullable: true
  })
  student?: StudentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studentID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  singed?: "asc" | "desc" | undefined;
}
