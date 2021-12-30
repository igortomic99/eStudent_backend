import { PrismaClient } from "@prisma/client";
import { ModulInput } from "../types/inputs/ModulInput";
import { Modul } from "../types/Modul";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Subject } from "../types/Subject";

const prisma = new PrismaClient();

@Resolver(Modul)
export class ModulResolver {
  @Query(() => [Modul])
  async getAllModuls() {
    const modules = await prisma.exam.findMany();
    return modules;
  }

  @Mutation(() => Modul)
  async createModul(@Arg("input", () => ModulInput) input: ModulInput) {
    let modul;
    try {
      modul = await prisma.modul.create({
        data: {
            moduleCode:input.moduleCode,
            moduleName:input.moduleName,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
    return modul;
  }

  @Query(()=> [Subject])
  async moduleSubjects(
    @Arg("id", () => String) id: string
  ){
    const subjects = await prisma.subject.findMany({
      where:{
        modulID:id
      }
    })
    return subjects;
  }
}