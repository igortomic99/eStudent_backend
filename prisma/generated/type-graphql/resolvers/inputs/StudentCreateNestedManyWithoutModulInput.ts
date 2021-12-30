import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateManyModulInputEnvelope } from "../inputs/StudentCreateManyModulInputEnvelope";
import { StudentCreateOrConnectWithoutModulInput } from "../inputs/StudentCreateOrConnectWithoutModulInput";
import { StudentCreateWithoutModulInput } from "../inputs/StudentCreateWithoutModulInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedManyWithoutModulInput", {
  isAbstract: true
})
export class StudentCreateNestedManyWithoutModulInput {
  @TypeGraphQL.Field(_type => [StudentCreateWithoutModulInput], {
    nullable: true
  })
  create?: StudentCreateWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutModulInput], {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentCreateManyModulInputEnvelope, {
    nullable: true
  })
  createMany?: StudentCreateManyModulInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentWhereUniqueInput[] | undefined;
}
