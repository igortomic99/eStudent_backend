import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GradeCreateOrConnectWithoutExamInput } from "../inputs/GradeCreateOrConnectWithoutExamInput";
import { GradeCreateWithoutExamInput } from "../inputs/GradeCreateWithoutExamInput";
import { GradeUpdateWithoutExamInput } from "../inputs/GradeUpdateWithoutExamInput";
import { GradeUpsertWithoutExamInput } from "../inputs/GradeUpsertWithoutExamInput";
import { GradeWhereUniqueInput } from "../inputs/GradeWhereUniqueInput";

@TypeGraphQL.InputType("GradeUpdateOneWithoutExamInput", {
  isAbstract: true
})
export class GradeUpdateOneWithoutExamInput {
  @TypeGraphQL.Field(_type => GradeCreateWithoutExamInput, {
    nullable: true
  })
  create?: GradeCreateWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => GradeCreateOrConnectWithoutExamInput, {
    nullable: true
  })
  connectOrCreate?: GradeCreateOrConnectWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => GradeUpsertWithoutExamInput, {
    nullable: true
  })
  upsert?: GradeUpsertWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => GradeWhereUniqueInput, {
    nullable: true
  })
  connect?: GradeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GradeUpdateWithoutExamInput, {
    nullable: true
  })
  update?: GradeUpdateWithoutExamInput | undefined;
}
