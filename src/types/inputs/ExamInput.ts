import { InputType, Field } from "type-graphql";
import { Student } from "../Student";

@InputType()
export class ExamInput {
  @Field(_type => Date, {
    nullable: false
  })
  date!: Date;


  @Field(_type => String, {
    nullable: false
  })
  subjectID!: string;

  @Field(_type => String, {
    nullable: true
  })
  exPeriodID?: string | null;
}
