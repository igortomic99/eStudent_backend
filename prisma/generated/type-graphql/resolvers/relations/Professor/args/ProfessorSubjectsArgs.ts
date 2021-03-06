import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectOrderByWithRelationInput } from "../../../inputs/SubjectOrderByWithRelationInput";
import { SubjectWhereInput } from "../../../inputs/SubjectWhereInput";
import { SubjectWhereUniqueInput } from "../../../inputs/SubjectWhereUniqueInput";
import { SubjectScalarFieldEnum } from "../../../../enums/SubjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProfessorSubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  where?: SubjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubjectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubjectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "subjectName" | "espp" | "professorID" | "type" | "modulID"> | undefined;
}
