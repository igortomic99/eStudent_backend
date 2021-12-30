import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyProfessorInput } from "../inputs/SubjectCreateManyProfessorInput";

@TypeGraphQL.InputType("SubjectCreateManyProfessorInputEnvelope", {
  isAbstract: true
})
export class SubjectCreateManyProfessorInputEnvelope {
  @TypeGraphQL.Field(_type => [SubjectCreateManyProfessorInput], {
    nullable: false
  })
  data!: SubjectCreateManyProfessorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
