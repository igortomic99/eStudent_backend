import { Class, Student } from "@prisma/client";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Modul {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  moduleName!: string;

  @Field(_type => String, {
    nullable: false
  })
  moduleCode!: string;

  students?: Student[];
}
