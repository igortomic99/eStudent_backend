import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyProfessorInputEnvelope } from "../inputs/SubjectCreateManyProfessorInputEnvelope";
import { SubjectCreateOrConnectWithoutProfessorInput } from "../inputs/SubjectCreateOrConnectWithoutProfessorInput";
import { SubjectCreateWithoutProfessorInput } from "../inputs/SubjectCreateWithoutProfessorInput";
import { SubjectScalarWhereInput } from "../inputs/SubjectScalarWhereInput";
import { SubjectUpdateManyWithWhereWithoutProfessorInput } from "../inputs/SubjectUpdateManyWithWhereWithoutProfessorInput";
import { SubjectUpdateWithWhereUniqueWithoutProfessorInput } from "../inputs/SubjectUpdateWithWhereUniqueWithoutProfessorInput";
import { SubjectUpsertWithWhereUniqueWithoutProfessorInput } from "../inputs/SubjectUpsertWithWhereUniqueWithoutProfessorInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateManyWithoutProfessorInput", {
  isAbstract: true
})
export class SubjectUpdateManyWithoutProfessorInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutProfessorInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutProfessorInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpsertWithWhereUniqueWithoutProfessorInput], {
    nullable: true
  })
  upsert?: SubjectUpsertWithWhereUniqueWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyProfessorInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyProfessorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  set?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  delete?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateWithWhereUniqueWithoutProfessorInput], {
    nullable: true
  })
  update?: SubjectUpdateWithWhereUniqueWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateManyWithWhereWithoutProfessorInput], {
    nullable: true
  })
  updateMany?: SubjectUpdateManyWithWhereWithoutProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubjectScalarWhereInput[] | undefined;
}
