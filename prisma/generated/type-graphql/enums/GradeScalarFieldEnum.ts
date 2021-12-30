import * as TypeGraphQL from "type-graphql";

export enum GradeScalarFieldEnum {
  id = "id",
  value = "value"
}
TypeGraphQL.registerEnumType(GradeScalarFieldEnum, {
  name: "GradeScalarFieldEnum",
  description: undefined,
});
