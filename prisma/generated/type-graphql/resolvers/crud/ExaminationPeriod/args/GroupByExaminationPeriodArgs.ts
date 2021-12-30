import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodOrderByWithAggregationInput } from "../../../inputs/ExaminationPeriodOrderByWithAggregationInput";
import { ExaminationPeriodScalarWhereWithAggregatesInput } from "../../../inputs/ExaminationPeriodScalarWhereWithAggregatesInput";
import { ExaminationPeriodWhereInput } from "../../../inputs/ExaminationPeriodWhereInput";
import { ExaminationPeriodScalarFieldEnum } from "../../../../enums/ExaminationPeriodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  where?: ExaminationPeriodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExaminationPeriodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "beginningDate" | "endDate" | "modulID">;

  @TypeGraphQL.Field(_type => ExaminationPeriodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExaminationPeriodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
