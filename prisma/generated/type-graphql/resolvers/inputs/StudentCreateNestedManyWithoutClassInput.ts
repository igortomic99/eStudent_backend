import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateManyClassInputEnvelope } from "../inputs/StudentCreateManyClassInputEnvelope";
import { StudentCreateOrConnectWithoutClassInput } from "../inputs/StudentCreateOrConnectWithoutClassInput";
import { StudentCreateWithoutClassInput } from "../inputs/StudentCreateWithoutClassInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedManyWithoutClassInput", {
  isAbstract: true
})
export class StudentCreateNestedManyWithoutClassInput {
  @TypeGraphQL.Field(_type => [StudentCreateWithoutClassInput], {
    nullable: true
  })
  create?: StudentCreateWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutClassInput], {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentCreateManyClassInputEnvelope, {
    nullable: true
  })
  createMany?: StudentCreateManyClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentWhereUniqueInput[] | undefined;
}
