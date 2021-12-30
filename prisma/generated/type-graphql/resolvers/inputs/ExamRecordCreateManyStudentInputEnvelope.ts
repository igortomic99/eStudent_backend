import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateManyStudentInput } from "../inputs/ExamRecordCreateManyStudentInput";

@TypeGraphQL.InputType("ExamRecordCreateManyStudentInputEnvelope", {
  isAbstract: true
})
export class ExamRecordCreateManyStudentInputEnvelope {
  @TypeGraphQL.Field(_type => [ExamRecordCreateManyStudentInput], {
    nullable: false
  })
  data!: ExamRecordCreateManyStudentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
