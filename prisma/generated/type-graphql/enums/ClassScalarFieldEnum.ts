import * as TypeGraphQL from "type-graphql";

export enum ClassScalarFieldEnum {
  id = "id",
  classLabel = "classLabel"
}
TypeGraphQL.registerEnumType(ClassScalarFieldEnum, {
  name: "ClassScalarFieldEnum",
  description: undefined,
});
