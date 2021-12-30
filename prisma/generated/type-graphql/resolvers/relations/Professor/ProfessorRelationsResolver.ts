import * as TypeGraphQL from "type-graphql";
import { Professor } from "../../../models/Professor";
import { Subject } from "../../../models/Subject";
import { ProfessorSubjectsArgs } from "./args/ProfessorSubjectsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Professor)
export class ProfessorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subject], {
    nullable: false
  })
  async subjects(@TypeGraphQL.Root() professor: Professor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProfessorSubjectsArgs): Promise<Subject[]> {
    return getPrismaFromContext(ctx).professor.findUnique({
      where: {
        id: professor.id,
      },
    }).subjects(args);
  }
}
