import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateManyModulInput } from "../inputs/StudentCreateManyModulInput";

@TypeGraphQL.InputType("StudentCreateManyModulInputEnvelope", {
  isAbstract: true
})
export class StudentCreateManyModulInputEnvelope {
  @TypeGraphQL.Field(_type => [StudentCreateManyModulInput], {
    nullable: false
  })
  data!: StudentCreateManyModulInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
