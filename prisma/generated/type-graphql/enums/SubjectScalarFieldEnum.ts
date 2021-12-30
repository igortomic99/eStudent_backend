import * as TypeGraphQL from "type-graphql";

export enum SubjectScalarFieldEnum {
  id = "id",
  subjectName = "subjectName",
  espp = "espp",
  professorID = "professorID",
  type = "type",
  modulID = "modulID"
}
TypeGraphQL.registerEnumType(SubjectScalarFieldEnum, {
  name: "SubjectScalarFieldEnum",
  description: undefined,
});
