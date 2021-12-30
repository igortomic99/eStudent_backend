import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCountAggregate } from "../outputs/ProfessorCountAggregate";
import { ProfessorMaxAggregate } from "../outputs/ProfessorMaxAggregate";
import { ProfessorMinAggregate } from "../outputs/ProfessorMinAggregate";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("ProfessorGroupBy", {
  isAbstract: true
})
export class ProfessorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  jmbg!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "ADMIN" | "STUDENT" | "PROFESSOR";

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
