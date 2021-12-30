import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassWhereInput } from "../inputs/ClassWhereInput";

@TypeGraphQL.InputType("ClassRelationFilter", {
  isAbstract: true
})
export class ClassRelationFilter {
  @TypeGraphQL.Field(_type => ClassWhereInput, {
    nullable: true
  })
  is?: ClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClassWhereInput, {
    nullable: true
  })
  isNot?: ClassWhereInput | undefined;
}
