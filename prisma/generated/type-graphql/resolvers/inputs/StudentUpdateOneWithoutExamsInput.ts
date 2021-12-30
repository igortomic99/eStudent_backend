import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateOrConnectWithoutExamsInput } from "../inputs/StudentCreateOrConnectWithoutExamsInput";
import { StudentCreateWithoutExamsInput } from "../inputs/StudentCreateWithoutExamsInput";
import { StudentUpdateWithoutExamsInput } from "../inputs/StudentUpdateWithoutExamsInput";
import { StudentUpsertWithoutExamsInput } from "../inputs/StudentUpsertWithoutExamsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateOneWithoutExamsInput", {
  isAbstract: true
})
export class StudentUpdateOneWithoutExamsInput {
  @TypeGraphQL.Field(_type => StudentCreateWithoutExamsInput, {
    nullable: true
  })
  create?: StudentCreateWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutExamsInput, {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpsertWithoutExamsInput, {
    nullable: true
  })
  upsert?: StudentUpsertWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  connect?: StudentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutExamsInput, {
    nullable: true
  })
  update?: StudentUpdateWithoutExamsInput | undefined;
}
