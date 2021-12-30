import * as TypeGraphQL from "type-graphql";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { Modul } from "../../../models/Modul";
import { Student } from "../../../models/Student";
import { Subject } from "../../../models/Subject";
import { ModulExaminationPeriodArgs } from "./args/ModulExaminationPeriodArgs";
import { ModulStudentsArgs } from "./args/ModulStudentsArgs";
import { ModulSubjectsArgs } from "./args/ModulSubjectsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Modul)
export class ModulRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Student], {
    nullable: false
  })
  async students(@TypeGraphQL.Root() modul: Modul, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ModulStudentsArgs): Promise<Student[]> {
    return getPrismaFromContext(ctx).modul.findUnique({
      where: {
        id: modul.id,
      },
    }).students(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Subject], {
    nullable: false
  })
  async subjects(@TypeGraphQL.Root() modul: Modul, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ModulSubjectsArgs): Promise<Subject[]> {
    return getPrismaFromContext(ctx).modul.findUnique({
      where: {
        id: modul.id,
      },
    }).subjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ExaminationPeriod], {
    nullable: false
  })
  async examinationPeriod(@TypeGraphQL.Root() modul: Modul, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ModulExaminationPeriodArgs): Promise<ExaminationPeriod[]> {
    return getPrismaFromContext(ctx).modul.findUnique({
      where: {
        id: modul.id,
      },
    }).examinationPeriod(args);
  }
}
