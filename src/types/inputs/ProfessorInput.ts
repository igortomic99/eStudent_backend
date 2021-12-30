import { InputType, Field } from "type-graphql";

@InputType()
export class ProfessorInput {    
      @Field((_type) => String, {
        nullable: false,
      })
      firstName!: string;
    
      @Field((_type) => String, {
        nullable: false,
      })
      lastName!: string;

      @Field((_type) => String, {
        nullable: false,
      })
      email!: string;
    
      @Field((_type) => String, {
        nullable: false,
      })
      password!: string;
    
      @Field((_type) => String, {
        nullable: false,
      })
      jmbg!: string;
}