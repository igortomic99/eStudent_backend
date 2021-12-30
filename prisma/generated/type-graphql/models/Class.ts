import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Student } from "../models/Student";
import { ClassCount } from "../resolvers/outputs/ClassCount";

@TypeGraphQL.ObjectType("Class", {
  isAbstract: true
})
export class Class {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  classLabel!: number;

  sudents?: Student[];

  @TypeGraphQL.Field(_type => ClassCount, {
    nullable: true
  })
  _count?: ClassCount | null;
}
