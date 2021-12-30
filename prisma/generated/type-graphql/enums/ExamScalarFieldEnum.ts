import * as TypeGraphQL from "type-graphql";

export enum ExamScalarFieldEnum {
  id = "id",
  date = "date",
  subjectID = "subjectID",
  exPeriodID = "exPeriodID"
}
TypeGraphQL.registerEnumType(ExamScalarFieldEnum, {
  name: "ExamScalarFieldEnum",
  description: undefined,
});
