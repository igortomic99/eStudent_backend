import * as TypeGraphQL from "type-graphql";

export enum ModulScalarFieldEnum {
  id = "id",
  moduleName = "moduleName",
  moduleCode = "moduleCode"
}
TypeGraphQL.registerEnumType(ModulScalarFieldEnum, {
  name: "ModulScalarFieldEnum",
  description: undefined,
});
