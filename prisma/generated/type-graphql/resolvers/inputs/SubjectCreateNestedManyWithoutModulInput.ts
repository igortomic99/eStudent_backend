import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyModulInputEnvelope } from "../inputs/SubjectCreateManyModulInputEnvelope";
import { SubjectCreateOrConnectWithoutModulInput } from "../inputs/SubjectCreateOrConnectWithoutModulInput";
import { SubjectCreateWithoutModulInput } from "../inputs/SubjectCreateWithoutModulInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateNestedManyWithoutModulInput", {
  isAbstract: true
})
export class SubjectCreateNestedManyWithoutModulInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutModulInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutModulInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyModulInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyModulInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;
}
