import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExaminationPeriodOrderByWithRelationInput } from "../../../inputs/ExaminationPeriodOrderByWithRelationInput";
import { ExaminationPeriodWhereInput } from "../../../inputs/ExaminationPeriodWhereInput";
import { ExaminationPeriodWhereUniqueInput } from "../../../inputs/ExaminationPeriodWhereUniqueInput";
import { ExaminationPeriodScalarFieldEnum } from "../../../../enums/ExaminationPeriodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExaminationPeriodArgs {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereInput, {
    nullable: true
  })
  where?: ExaminationPeriodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExaminationPeriodOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExaminationPeriodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "beginningDate" | "endDate" | "modulID"> | undefined;
}
