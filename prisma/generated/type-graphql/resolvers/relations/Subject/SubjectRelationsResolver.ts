import * as TypeGraphQL from "type-graphql";
import { Exam } from "../../../models/Exam";
import { Modul } from "../../../models/Modul";
import { Professor } from "../../../models/Professor";
import { Subject } from "../../../models/Subject";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subject)
export class SubjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Professor, {
    nullable: false
  })
  async professor(@TypeGraphQL.Root() subject: Subject, @TypeGraphQL.Ctx() ctx: any): Promise<Professor> {
    return getPrismaFromContext(ctx).subject.findUnique({
      where: {
        id: subject.id,
      },
    }).professor({});
  }

  @TypeGraphQL.FieldResolver(_type => Exam, {
    nullable: true
  })
  async exam(@TypeGraphQL.Root() subject: Subject, @TypeGraphQL.Ctx() ctx: any): Promise<Exam | null> {
    return getPrismaFromContext(ctx).subject.findUnique({
      where: {
        id: subject.id,
      },
    }).exam({});
  }

  @TypeGraphQL.FieldResolver(_type => Modul, {
    nullable: false
  })
  async modul(@TypeGraphQL.Root() subject: Subject, @TypeGraphQL.Ctx() ctx: any): Promise<Modul> {
    return getPrismaFromContext(ctx).subject.findUnique({
      where: {
        id: subject.id,
      },
    }).modul({});
  }
}
