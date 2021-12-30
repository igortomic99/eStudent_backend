import * as TypeGraphQL from "type-graphql";
import { Class } from "../../../models/Class";
import { Student } from "../../../models/Student";
import { ClassSudentsArgs } from "./args/ClassSudentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Class)
export class ClassRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Student], {
    nullable: false
  })
  async sudents(@TypeGraphQL.Root() class: Class, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ClassSudentsArgs): Promise<Student[]> {
    return getPrismaFromContext(ctx).class.findUnique({
      where: {
        id: class.id,
      },
    }).sudents(args);
  }
}
