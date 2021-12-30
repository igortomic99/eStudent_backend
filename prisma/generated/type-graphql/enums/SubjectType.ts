import * as TypeGraphQL from "type-graphql";

export enum SubjectType {
  REQUIRED = "REQUIRED",
  ELECTIVE = "ELECTIVE"
}
TypeGraphQL.registerEnumType(SubjectType, {
  name: "SubjectType",
  description: undefined,
});
