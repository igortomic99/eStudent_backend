import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutExamsInput } from "../inputs/StudentCreateOrConnectWithoutExamsInput";
import { StudentCreateWithoutExamsInput } from "../inputs/StudentCreateWithoutExamsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentCreateNestedOneWithoutExamsInput", {
  isAbstract: true
})
export class StudentCreateNestedOneWithoutExamsInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutExamsInput, {
    nullable: true
  })
  create?: StudentCreateWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutExamsInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;
}
