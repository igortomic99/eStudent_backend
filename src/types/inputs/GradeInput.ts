import { InputType, Field, Int } from "type-graphql";

@InputType()
export class GradeInput {
  @Field((_type) => Int, {
    nullable: false,
  })
  value!: number;
}
