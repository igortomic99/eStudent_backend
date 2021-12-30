import { PrismaClient } from "@prisma/client";
import { Class } from "../types/Class";
import { ClassInput } from "../types/inputs/ClassInput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

const prisma = new PrismaClient();

@Resolver(Class)
export class ClassResolver {
  @Query(() => [Class])
  async getAllClasses() {
    const classes = await prisma.class.findMany();
    return classes;
  }

  @Mutation(() => Class)
  async createClass(@Arg("input", () => ClassInput) input: ClassInput) {
    let classa;
    try {
      classa = await prisma.class.create({
        data: {
            classLabel:input.classLabel,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
    return classa;
  }
}