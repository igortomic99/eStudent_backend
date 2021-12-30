import * as TypeGraphQL from "type-graphql";

export enum ProfessorScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  email = "email",
  lastName = "lastName",
  password = "password",
  jmbg = "jmbg",
  role = "role"
}
TypeGraphQL.registerEnumType(ProfessorScalarFieldEnum, {
  name: "ProfessorScalarFieldEnum",
  description: undefined,
});
