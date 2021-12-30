import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateManyClassInput } from "../inputs/StudentCreateManyClassInput";

@TypeGraphQL.InputType("StudentCreateManyClassInputEnvelope", {
  isAbstract: true
})
export class StudentCreateManyClassInputEnvelope {
  @TypeGraphQL.Field(_type => [StudentCreateManyClassInput], {
    nullable: false
  })
  data!: StudentCreateManyClassInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
