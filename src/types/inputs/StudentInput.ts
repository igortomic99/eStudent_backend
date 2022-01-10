import { Field, InputType, Int } from "type-graphql";

@InputType()
export class StudentInput {
  @Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  firstName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  middleName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  lastName!: string;


  @Field((_type) => String, {
    nullable: false,
  })
  jmbg!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  brind!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  birthDate!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  moduleName!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  classNumber!: number;
}
