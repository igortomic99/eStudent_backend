import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ModulMaxAggregate", {
  isAbstract: true
})
export class ModulMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  moduleName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  moduleCode!: string | null;
}
