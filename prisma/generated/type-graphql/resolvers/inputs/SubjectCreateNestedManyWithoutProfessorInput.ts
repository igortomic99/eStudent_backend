import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyProfessorInputEnvelope } from "../inputs/SubjectCreateManyProfessorInputEnvelope";
import { SubjectCreateOrConnectWithoutProfessorInput } from "../inputs/SubjectCreateOrConnectWithoutProfessorInput";
import { SubjectCreateWithoutProfessorInput } from "../inputs/SubjectCreateWithoutProfessorInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateNestedManyWithoutProfessorInput", {
  isAbstract: true
})
export class SubjectCreateNestedManyWithoutProfessorInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutProfessorInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutProfessorInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyProfessorInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyProfessorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;
}
