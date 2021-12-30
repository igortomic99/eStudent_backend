import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCountAggregate } from "../outputs/ProfessorCountAggregate";
import { ProfessorMaxAggregate } from "../outputs/ProfessorMaxAggregate";
import { ProfessorMinAggregate } from "../outputs/ProfessorMinAggregate";

@TypeGraphQL.ObjectType("AggregateProfessor", {
  isAbstract: true
})
export class AggregateProfessor {
  @TypeGraphQL.Field(_type => ProfessorCountAggregate, {
    nullable: true
  })
  _count!: ProfessorCountAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorMinAggregate, {
    nullable: true
  })
  _min!: ProfessorMinAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorMaxAggregate, {
    nullable: true
  })
  _max!: ProfessorMaxAggregate | null;
}
