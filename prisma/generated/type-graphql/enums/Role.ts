import * as TypeGraphQL from "type-graphql";

export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  PROFESSOR = "PROFESSOR"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
