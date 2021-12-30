import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamOrderByWithRelationInput } from "../inputs/ExamOrderByWithRelationInput";
import { ModulOrderByWithRelationInput } from "../inputs/ModulOrderByWithRelationInput";
import { ProfessorOrderByWithRelationInput } from "../inputs/ProfessorOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubjectOrderByWithRelationInput", {
  isAbstract: true
})
export class SubjectOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subjectName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  espp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorOrderByWithRelationInput, {
    nullable: true
  })
  professor?: ProfessorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  professorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExamOrderByWithRelationInput, {
    nullable: true
  })
  exam?: ExamOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ModulOrderByWithRelationInput, {
    nullable: true
  })
  modul?: ModulOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modulID?: "asc" | "desc" | undefined;
}
