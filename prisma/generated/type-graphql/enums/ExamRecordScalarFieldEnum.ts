import * as TypeGraphQL from "type-graphql";

export enum ExamRecordScalarFieldEnum {
  id = "id",
  points = "points",
  passed = "passed",
  gradeID = "gradeID",
  examID = "examID",
  studentID = "studentID",
  singed = "singed"
}
TypeGraphQL.registerEnumType(ExamRecordScalarFieldEnum, {
  name: "ExamRecordScalarFieldEnum",
  description: undefined,
});
