import { InputType, Field, Int } from "type-graphql";
import { SubjectType } from "../enums/SubjectType";

@InputType()
export class SubjectInput {
  @Field((_type) => String, {
    nullable: false,
  })
  subjectName!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  espp!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  professorID!: string;

  @Field((_type) => SubjectType, {
    nullable: false,
  })
  type!: "REQUIRED" | "ELECTIVE";

  @Field(_type => String, {
    nullable: false
  })
  modulID!: string;
}
