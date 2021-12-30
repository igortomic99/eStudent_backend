import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCountAggregate } from "../outputs/StudentCountAggregate";
import { StudentMaxAggregate } from "../outputs/StudentMaxAggregate";
import { StudentMinAggregate } from "../outputs/StudentMinAggregate";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("StudentGroupBy", {
  isAbstract: true
})
export class StudentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  middleName!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brind!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  birthDate!: Date;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "ADMIN" | "STUDENT" | "PROFESSOR";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modulID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  classID!: string;

  @TypeGraphQL.Field(_type => StudentCountAggregate, {
    nullable: true
  })
  _count!: StudentCountAggregate | null;

  @TypeGraphQL.Field(_type => StudentMinAggregate, {
    nullable: true
  })
  _min!: StudentMinAggregate | null;

  @TypeGraphQL.Field(_type => StudentMaxAggregate, {
    nullable: true
  })
  _max!: StudentMaxAggregate | null;
}
