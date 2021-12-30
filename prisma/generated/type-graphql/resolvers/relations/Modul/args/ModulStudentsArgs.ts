import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentOrderByWithRelationInput } from "../../../inputs/StudentOrderByWithRelationInput";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";
import { StudentScalarFieldEnum } from "../../../../enums/StudentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ModulStudentsArgs {
  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true
  })
  where?: StudentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StudentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: true
  })
  cursor?: StudentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "firstName" | "middleName" | "lastName" | "password" | "jmbg" | "brind" | "birthDate" | "role" | "modulID" | "classID"> | undefined;
}
