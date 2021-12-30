import { InputType, Field, Int } from "type-graphql";

@InputType()
export class ClassInput {
    @Field((_type) => Int, {
        nullable: false,
      })
      classLabel!: number;
}
