import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateNestedManyWithoutClassInput } from "../inputs/StudentCreateNestedManyWithoutClassInput";

@TypeGraphQL.InputType("ClassCreateInput", {
  isAbstract: true
})
export class ClassCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  classLabel!: number;

  @TypeGraphQL.Field(_type => StudentCreateNestedManyWithoutClassInput, {
    nullable: true
  })
  sudents?: StudentCreateNestedManyWithoutClassInput | undefined;
}
