import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateOrConnectWithoutExamInput } from "../inputs/SubjectCreateOrConnectWithoutExamInput";
import { SubjectCreateWithoutExamInput } from "../inputs/SubjectCreateWithoutExamInput";
import { SubjectUpdateWithoutExamInput } from "../inputs/SubjectUpdateWithoutExamInput";
import { SubjectUpsertWithoutExamInput } from "../inputs/SubjectUpsertWithoutExamInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateOneWithoutExamInput", {
  isAbstract: true
})
export class SubjectUpdateOneWithoutExamInput {
  @TypeGraphQL.Field(_type => SubjectCreateWithoutExamInput, {
    nullable: true
  })
  create?: SubjectCreateWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateOrConnectWithoutExamInput, {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => SubjectUpsertWithoutExamInput, {
    nullable: true
  })
  upsert?: SubjectUpsertWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutExamInput, {
    nullable: true
  })
  update?: SubjectUpdateWithoutExamInput | undefined;
}
