import { PrismaClient } from "@prisma/client";
import { ModulInput } from "../types/inputs/ModulInput";
import { Modul } from "../types/Modul";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Subject } from "../types/Subject";

const prisma = new PrismaClient();

@Resolver(Modul)
export class ModulResolver {
  @Query(() => [Modul])
  async getAllModuls(): Promise<Modul[] | null> {
    return await prisma.modul.findMany();
  }

  @Mutation(() => Modul)
  async createModul(
    @Arg("input", () => ModulInput) input: ModulInput
  ): Promise<Modul | null> {
    let modul;
    try {
      modul = await prisma.modul.create({
        data: {
          moduleCode: input.moduleCode,
          moduleName: input.moduleName,
        },
      });
    } catch (err) {
      ///ADD ERR CODEs BRO
      console.log(err.message);
      throw new Error("Add err codes bro");
    }
    return modul;
  }

  @Query(() => [Subject])
  async modulSubjects(
    @Arg("id", () => String) id: string
  ): Promise<Subject[] | null> {
    return await prisma.subject.findMany({
      where: {
        modulID: id,
      },
    });
  }
}
