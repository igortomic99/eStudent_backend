import { PrismaClient } from "@prisma/client";
import { Class } from "../types/Class";
import { ClassInput } from "../types/inputs/ClassInput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

const prisma = new PrismaClient();

@Resolver(Class)
export class ClassResolver {
  @Query(() => [Class])
  async getAllClasses() {
    return await prisma.class.findMany();
  }

  @Mutation(() => Class)
  async createClass(@Arg("input", () => ClassInput) input: ClassInput) {
    let classa;
    try {
      classa = await prisma.class.create({
        data: {
          classLabel: input.classLabel,
        },
      });
    } catch (err) {
      ///Add err codes bro
      console.log(err.message);
      throw new Error("add err code bro");
    }
    return classa;
  }
}
