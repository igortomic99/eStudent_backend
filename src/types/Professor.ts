import { Subject } from "@prisma/client";
import { ObjectType, Field } from "type-graphql";
import { Role } from "./enums/Role";

@ObjectType()
export class Professor {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

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

  @Field(_type => Role, {
    nullable: false
  })
  role!: "ADMIN" | "STUDENT" | "PROFESSOR";

  subjects?: Subject[];
}
