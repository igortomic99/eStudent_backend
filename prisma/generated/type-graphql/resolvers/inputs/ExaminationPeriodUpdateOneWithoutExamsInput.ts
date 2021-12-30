import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateOrConnectWithoutExamsInput } from "../inputs/ExaminationPeriodCreateOrConnectWithoutExamsInput";
import { ExaminationPeriodCreateWithoutExamsInput } from "../inputs/ExaminationPeriodCreateWithoutExamsInput";
import { ExaminationPeriodUpdateWithoutExamsInput } from "../inputs/ExaminationPeriodUpdateWithoutExamsInput";
import { ExaminationPeriodUpsertWithoutExamsInput } from "../inputs/ExaminationPeriodUpsertWithoutExamsInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodUpdateOneWithoutExamsInput", {
  isAbstract: true
})
export class ExaminationPeriodUpdateOneWithoutExamsInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodCreateWithoutExamsInput, {
    nullable: true
  })
  create?: ExaminationPeriodCreateWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateOrConnectWithoutExamsInput, {
    nullable: true
  })
  connectOrCreate?: ExaminationPeriodCreateOrConnectWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpsertWithoutExamsInput, {
    nullable: true
  })
  upsert?: ExaminationPeriodUpsertWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: true
  })
  connect?: ExaminationPeriodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateWithoutExamsInput, {
    nullable: true
  })
  update?: ExaminationPeriodUpdateWithoutExamsInput | undefined;
}
