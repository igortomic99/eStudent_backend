import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentListRelationFilter } from "../inputs/StudentListRelationFilter";

@TypeGraphQL.InputType("ClassWhereInput", {
  isAbstract: true
})
export class ClassWhereInput {
  @TypeGraphQL.Field(_type => [ClassWhereInput], {
    nullable: true
  })
  AND?: ClassWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassWhereInput], {
    nullable: true
  })
  OR?: ClassWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassWhereInput], {
    nullable: true
  })
  NOT?: ClassWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  classLabel?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StudentListRelationFilter, {
    nullable: true
  })
  sudents?: StudentListRelationFilter | undefined;
}
