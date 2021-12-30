import * as TypeGraphQL from "type-graphql";

export enum StudentScalarFieldEnum {
  id = "id",
  email = "email",
  firstName = "firstName",
  middleName = "middleName",
  lastName = "lastName",
  password = "password",
  jmbg = "jmbg",
  brind = "brind",
  birthDate = "birthDate",
  role = "role",
  modulID = "modulID",
  classID = "classID"
}
TypeGraphQL.registerEnumType(StudentScalarFieldEnum, {
  name: "StudentScalarFieldEnum",
  description: undefined,
});
