import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectOrderByWithAggregationInput } from "../../../inputs/SubjectOrderByWithAggregationInput";
import { SubjectScalarWhereWithAggregatesInput } from "../../../inputs/SubjectScalarWhereWithAggregatesInput";
import { SubjectWhereInput } from "../../../inputs/SubjectWhereInput";
import { SubjectScalarFieldEnum } from "../../../../enums/SubjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubjectArgs {
  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  where?: SubjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubjectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubjectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "subjectName" | "espp" | "professorID" | "type" | "modulID">;

  @TypeGraphQL.Field(_type => SubjectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubjectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
