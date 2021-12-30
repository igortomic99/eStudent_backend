import { registerEnumType } from "type-graphql";

export enum SubjectType {
    REQUIRED = "REQUIRED",
    ELECTIVE = "ELECTIVE"
  }
  registerEnumType(SubjectType, {
    name: "SubjectType",
    description: undefined,
  });