import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCountAggregate } from "../outputs/ExaminationPeriodCountAggregate";
import { ExaminationPeriodMaxAggregate } from "../outputs/ExaminationPeriodMaxAggregate";
import { ExaminationPeriodMinAggregate } from "../outputs/ExaminationPeriodMinAggregate";

@TypeGraphQL.ObjectType("ExaminationPeriodGroupBy", {
  isAbstract: true
})
export class ExaminationPeriodGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  beginningDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modulID!: string | null;

  @TypeGraphQL.Field(_type => ExaminationPeriodCountAggregate, {
    nullable: true
  })
  _count!: ExaminationPeriodCountAggregate | null;

  @TypeGraphQL.Field(_type => ExaminationPeriodMinAggregate, {
    nullable: true
  })
  _min!: ExaminationPeriodMinAggregate | null;

  @TypeGraphQL.Field(_type => ExaminationPeriodMaxAggregate, {
    nullable: true
  })
  _max!: ExaminationPeriodMaxAggregate | null;
}
