import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateOrConnectWithoutSubjectInput } from "../inputs/ExamCreateOrConnectWithoutSubjectInput";
import { ExamCreateWithoutSubjectInput } from "../inputs/ExamCreateWithoutSubjectInput";
import { ExamUpdateWithoutSubjectInput } from "../inputs/ExamUpdateWithoutSubjectInput";
import { ExamUpsertWithoutSubjectInput } from "../inputs/ExamUpsertWithoutSubjectInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamUpdateOneWithoutSubjectInput", {
  isAbstract: true
})
export class ExamUpdateOneWithoutSubjectInput {
  @TypeGraphQL.Field(_type => ExamCreateWithoutSubjectInput, {
    nullable: true
  })
  create?: ExamCreateWithoutSubjectInput | undefined;

  @TypeGraphQL.Field(_type => ExamCreateOrConnectWithoutSubjectInput, {
    nullable: true
  })
  connectOrCreate?: ExamCreateOrConnectWithoutSubjectInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpsertWithoutSubjectInput, {
    nullable: true
  })
  upsert?: ExamUpsertWithoutSubjectInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpdateWithoutSubjectInput, {
    nullable: true
  })
  update?: ExamUpdateWithoutSubjectInput | undefined;
}
