import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateExaminationPeriodArgs } from "./args/AggregateExaminationPeriodArgs";
import { CreateExaminationPeriodArgs } from "./args/CreateExaminationPeriodArgs";
import { CreateManyExaminationPeriodArgs } from "./args/CreateManyExaminationPeriodArgs";
import { DeleteExaminationPeriodArgs } from "./args/DeleteExaminationPeriodArgs";
import { DeleteManyExaminationPeriodArgs } from "./args/DeleteManyExaminationPeriodArgs";
import { FindFirstExaminationPeriodArgs } from "./args/FindFirstExaminationPeriodArgs";
import { FindManyExaminationPeriodArgs } from "./args/FindManyExaminationPeriodArgs";
import { FindUniqueExaminationPeriodArgs } from "./args/FindUniqueExaminationPeriodArgs";
import { GroupByExaminationPeriodArgs } from "./args/GroupByExaminationPeriodArgs";
import { UpdateExaminationPeriodArgs } from "./args/UpdateExaminationPeriodArgs";
import { UpdateManyExaminationPeriodArgs } from "./args/UpdateManyExaminationPeriodArgs";
import { UpsertExaminationPeriodArgs } from "./args/UpsertExaminationPeriodArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExaminationPeriod } from "../../outputs/AggregateExaminationPeriod";
import { ExaminationPeriodGroupBy } from "../../outputs/ExaminationPeriodGroupBy";

@TypeGraphQL.Resolver(_of => ExaminationPeriod)
export class ExaminationPeriodCrudResolver {
  @TypeGraphQL.Query(_returns => ExaminationPeriod, {
    nullable: true
  })
  async examinationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExaminationPeriodArgs): Promise<ExaminationPeriod | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExaminationPeriod, {
    nullable: true
  })
  async findFirstExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExaminationPeriodArgs): Promise<ExaminationPeriod | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExaminationPeriod], {
    nullable: false
  })
  async examinationPeriods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExaminationPeriodArgs): Promise<ExaminationPeriod[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExaminationPeriod, {
    nullable: false
  })
  async createExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateExaminationPeriodArgs): Promise<ExaminationPeriod> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyExaminationPeriodArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExaminationPeriod, {
    nullable: true
  })
  async deleteExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteExaminationPeriodArgs): Promise<ExaminationPeriod | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExaminationPeriod, {
    nullable: true
  })
  async updateExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateExaminationPeriodArgs): Promise<ExaminationPeriod | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyExaminationPeriodArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyExaminationPeriodArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExaminationPeriod, {
    nullable: false
  })
  async upsertExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertExaminationPeriodArgs): Promise<ExaminationPeriod> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateExaminationPeriod, {
    nullable: false
  })
  async aggregateExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExaminationPeriodArgs): Promise<AggregateExaminationPeriod> {
    return getPrismaFromContext(ctx).examinationPeriod.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExaminationPeriodGroupBy], {
    nullable: false
  })
  async groupByExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExaminationPeriodArgs): Promise<ExaminationPeriodGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
