import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyModulInput } from "../inputs/SubjectCreateManyModulInput";

@TypeGraphQL.InputType("SubjectCreateManyModulInputEnvelope", {
  isAbstract: true
})
export class SubjectCreateManyModulInputEnvelope {
  @TypeGraphQL.Field(_type => [SubjectCreateManyModulInput], {
    nullable: false
  })
  data!: SubjectCreateManyModulInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
