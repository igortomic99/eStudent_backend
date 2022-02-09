import { Field, ObjectType } from "type-graphql";
import { Exam } from "./Exam";
import { Modul } from "./Modul";

@ObjectType()
export class ExaminationPeriod {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  beginningDate!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  endDate!: Date;


  @Field((_type) => [Exam], {
    nullable: false,
  })
  exams?: Exam[];

  modul?: Modul | null;

  @Field((_type) => String, {
    nullable: true,
  })
  modulID?: string | null;
}
