import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateManyExaminationPeriodInputEnvelope } from "../inputs/ExamCreateManyExaminationPeriodInputEnvelope";
import { ExamCreateOrConnectWithoutExaminationPeriodInput } from "../inputs/ExamCreateOrConnectWithoutExaminationPeriodInput";
import { ExamCreateWithoutExaminationPeriodInput } from "../inputs/ExamCreateWithoutExaminationPeriodInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamCreateNestedManyWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamCreateNestedManyWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => [ExamCreateWithoutExaminationPeriodInput], {
    nullable: true
  })
  create?: ExamCreateWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamCreateOrConnectWithoutExaminationPeriodInput], {
    nullable: true
  })
  connectOrCreate?: ExamCreateOrConnectWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => ExamCreateManyExaminationPeriodInputEnvelope, {
    nullable: true
  })
  createMany?: ExamCreateManyExaminationPeriodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereUniqueInput], {
    nullable: true
  })
  connect?: ExamWhereUniqueInput[] | undefined;
}
