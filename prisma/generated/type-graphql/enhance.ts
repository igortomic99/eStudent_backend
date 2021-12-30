import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Grade: crudResolvers.GradeCrudResolver,
  Modul: crudResolvers.ModulCrudResolver,
  Class: crudResolvers.ClassCrudResolver,
  Student: crudResolvers.StudentCrudResolver,
  ExamRecord: crudResolvers.ExamRecordCrudResolver,
  Exam: crudResolvers.ExamCrudResolver,
  Subject: crudResolvers.SubjectCrudResolver,
  Professor: crudResolvers.ProfessorCrudResolver,
  ExaminationPeriod: crudResolvers.ExaminationPeriodCrudResolver
};
const actionResolversMap = {
  Grade: {
    grade: actionResolvers.FindUniqueGradeResolver,
    findFirstGrade: actionResolvers.FindFirstGradeResolver,
    grades: actionResolvers.FindManyGradeResolver,
    createGrade: actionResolvers.CreateGradeResolver,
    createManyGrade: actionResolvers.CreateManyGradeResolver,
    deleteGrade: actionResolvers.DeleteGradeResolver,
    updateGrade: actionResolvers.UpdateGradeResolver,
    deleteManyGrade: actionResolvers.DeleteManyGradeResolver,
    updateManyGrade: actionResolvers.UpdateManyGradeResolver,
    upsertGrade: actionResolvers.UpsertGradeResolver,
    aggregateGrade: actionResolvers.AggregateGradeResolver,
    groupByGrade: actionResolvers.GroupByGradeResolver
  },
  Modul: {
    modul: actionResolvers.FindUniqueModulResolver,
    findFirstModul: actionResolvers.FindFirstModulResolver,
    moduls: actionResolvers.FindManyModulResolver,
    createModul: actionResolvers.CreateModulResolver,
    createManyModul: actionResolvers.CreateManyModulResolver,
    deleteModul: actionResolvers.DeleteModulResolver,
    updateModul: actionResolvers.UpdateModulResolver,
    deleteManyModul: actionResolvers.DeleteManyModulResolver,
    updateManyModul: actionResolvers.UpdateManyModulResolver,
    upsertModul: actionResolvers.UpsertModulResolver,
    aggregateModul: actionResolvers.AggregateModulResolver,
    groupByModul: actionResolvers.GroupByModulResolver
  },
  Class: {
    class: actionResolvers.FindUniqueClassResolver,
    findFirstClass: actionResolvers.FindFirstClassResolver,
    classes: actionResolvers.FindManyClassResolver,
    createClass: actionResolvers.CreateClassResolver,
    createManyClass: actionResolvers.CreateManyClassResolver,
    deleteClass: actionResolvers.DeleteClassResolver,
    updateClass: actionResolvers.UpdateClassResolver,
    deleteManyClass: actionResolvers.DeleteManyClassResolver,
    updateManyClass: actionResolvers.UpdateManyClassResolver,
    upsertClass: actionResolvers.UpsertClassResolver,
    aggregateClass: actionResolvers.AggregateClassResolver,
    groupByClass: actionResolvers.GroupByClassResolver
  },
  Student: {
    student: actionResolvers.FindUniqueStudentResolver,
    findFirstStudent: actionResolvers.FindFirstStudentResolver,
    students: actionResolvers.FindManyStudentResolver,
    createStudent: actionResolvers.CreateStudentResolver,
    createManyStudent: actionResolvers.CreateManyStudentResolver,
    deleteStudent: actionResolvers.DeleteStudentResolver,
    updateStudent: actionResolvers.UpdateStudentResolver,
    deleteManyStudent: actionResolvers.DeleteManyStudentResolver,
    updateManyStudent: actionResolvers.UpdateManyStudentResolver,
    upsertStudent: actionResolvers.UpsertStudentResolver,
    aggregateStudent: actionResolvers.AggregateStudentResolver,
    groupByStudent: actionResolvers.GroupByStudentResolver
  },
  ExamRecord: {
    examRecord: actionResolvers.FindUniqueExamRecordResolver,
    findFirstExamRecord: actionResolvers.FindFirstExamRecordResolver,
    examRecords: actionResolvers.FindManyExamRecordResolver,
    createExamRecord: actionResolvers.CreateExamRecordResolver,
    createManyExamRecord: actionResolvers.CreateManyExamRecordResolver,
    deleteExamRecord: actionResolvers.DeleteExamRecordResolver,
    updateExamRecord: actionResolvers.UpdateExamRecordResolver,
    deleteManyExamRecord: actionResolvers.DeleteManyExamRecordResolver,
    updateManyExamRecord: actionResolvers.UpdateManyExamRecordResolver,
    upsertExamRecord: actionResolvers.UpsertExamRecordResolver,
    aggregateExamRecord: actionResolvers.AggregateExamRecordResolver,
    groupByExamRecord: actionResolvers.GroupByExamRecordResolver
  },
  Exam: {
    exam: actionResolvers.FindUniqueExamResolver,
    findFirstExam: actionResolvers.FindFirstExamResolver,
    exams: actionResolvers.FindManyExamResolver,
    createExam: actionResolvers.CreateExamResolver,
    createManyExam: actionResolvers.CreateManyExamResolver,
    deleteExam: actionResolvers.DeleteExamResolver,
    updateExam: actionResolvers.UpdateExamResolver,
    deleteManyExam: actionResolvers.DeleteManyExamResolver,
    updateManyExam: actionResolvers.UpdateManyExamResolver,
    upsertExam: actionResolvers.UpsertExamResolver,
    aggregateExam: actionResolvers.AggregateExamResolver,
    groupByExam: actionResolvers.GroupByExamResolver
  },
  Subject: {
    subject: actionResolvers.FindUniqueSubjectResolver,
    findFirstSubject: actionResolvers.FindFirstSubjectResolver,
    subjects: actionResolvers.FindManySubjectResolver,
    createSubject: actionResolvers.CreateSubjectResolver,
    createManySubject: actionResolvers.CreateManySubjectResolver,
    deleteSubject: actionResolvers.DeleteSubjectResolver,
    updateSubject: actionResolvers.UpdateSubjectResolver,
    deleteManySubject: actionResolvers.DeleteManySubjectResolver,
    updateManySubject: actionResolvers.UpdateManySubjectResolver,
    upsertSubject: actionResolvers.UpsertSubjectResolver,
    aggregateSubject: actionResolvers.AggregateSubjectResolver,
    groupBySubject: actionResolvers.GroupBySubjectResolver
  },
  Professor: {
    professor: actionResolvers.FindUniqueProfessorResolver,
    findFirstProfessor: actionResolvers.FindFirstProfessorResolver,
    professors: actionResolvers.FindManyProfessorResolver,
    createProfessor: actionResolvers.CreateProfessorResolver,
    createManyProfessor: actionResolvers.CreateManyProfessorResolver,
    deleteProfessor: actionResolvers.DeleteProfessorResolver,
    updateProfessor: actionResolvers.UpdateProfessorResolver,
    deleteManyProfessor: actionResolvers.DeleteManyProfessorResolver,
    updateManyProfessor: actionResolvers.UpdateManyProfessorResolver,
    upsertProfessor: actionResolvers.UpsertProfessorResolver,
    aggregateProfessor: actionResolvers.AggregateProfessorResolver,
    groupByProfessor: actionResolvers.GroupByProfessorResolver
  },
  ExaminationPeriod: {
    examinationPeriod: actionResolvers.FindUniqueExaminationPeriodResolver,
    findFirstExaminationPeriod: actionResolvers.FindFirstExaminationPeriodResolver,
    examinationPeriods: actionResolvers.FindManyExaminationPeriodResolver,
    createExaminationPeriod: actionResolvers.CreateExaminationPeriodResolver,
    createManyExaminationPeriod: actionResolvers.CreateManyExaminationPeriodResolver,
    deleteExaminationPeriod: actionResolvers.DeleteExaminationPeriodResolver,
    updateExaminationPeriod: actionResolvers.UpdateExaminationPeriodResolver,
    deleteManyExaminationPeriod: actionResolvers.DeleteManyExaminationPeriodResolver,
    updateManyExaminationPeriod: actionResolvers.UpdateManyExaminationPeriodResolver,
    upsertExaminationPeriod: actionResolvers.UpsertExaminationPeriodResolver,
    aggregateExaminationPeriod: actionResolvers.AggregateExaminationPeriodResolver,
    groupByExaminationPeriod: actionResolvers.GroupByExaminationPeriodResolver
  }
};
const crudResolversInfo = {
  Grade: ["grade", "findFirstGrade", "grades", "createGrade", "createManyGrade", "deleteGrade", "updateGrade", "deleteManyGrade", "updateManyGrade", "upsertGrade", "aggregateGrade", "groupByGrade"],
  Modul: ["modul", "findFirstModul", "moduls", "createModul", "createManyModul", "deleteModul", "updateModul", "deleteManyModul", "updateManyModul", "upsertModul", "aggregateModul", "groupByModul"],
  Class: ["class", "findFirstClass", "classes", "createClass", "createManyClass", "deleteClass", "updateClass", "deleteManyClass", "updateManyClass", "upsertClass", "aggregateClass", "groupByClass"],
  Student: ["student", "findFirstStudent", "students", "createStudent", "createManyStudent", "deleteStudent", "updateStudent", "deleteManyStudent", "updateManyStudent", "upsertStudent", "aggregateStudent", "groupByStudent"],
  ExamRecord: ["examRecord", "findFirstExamRecord", "examRecords", "createExamRecord", "createManyExamRecord", "deleteExamRecord", "updateExamRecord", "deleteManyExamRecord", "updateManyExamRecord", "upsertExamRecord", "aggregateExamRecord", "groupByExamRecord"],
  Exam: ["exam", "findFirstExam", "exams", "createExam", "createManyExam", "deleteExam", "updateExam", "deleteManyExam", "updateManyExam", "upsertExam", "aggregateExam", "groupByExam"],
  Subject: ["subject", "findFirstSubject", "subjects", "createSubject", "createManySubject", "deleteSubject", "updateSubject", "deleteManySubject", "updateManySubject", "upsertSubject", "aggregateSubject", "groupBySubject"],
  Professor: ["professor", "findFirstProfessor", "professors", "createProfessor", "createManyProfessor", "deleteProfessor", "updateProfessor", "deleteManyProfessor", "updateManyProfessor", "upsertProfessor", "aggregateProfessor", "groupByProfessor"],
  ExaminationPeriod: ["examinationPeriod", "findFirstExaminationPeriod", "examinationPeriods", "createExaminationPeriod", "createManyExaminationPeriod", "deleteExaminationPeriod", "updateExaminationPeriod", "deleteManyExaminationPeriod", "updateManyExaminationPeriod", "upsertExaminationPeriod", "aggregateExaminationPeriod", "groupByExaminationPeriod"]
};
const argsInfo = {
  FindUniqueGradeArgs: ["where"],
  FindFirstGradeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGradeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateGradeArgs: ["data"],
  CreateManyGradeArgs: ["data", "skipDuplicates"],
  DeleteGradeArgs: ["where"],
  UpdateGradeArgs: ["data", "where"],
  DeleteManyGradeArgs: ["where"],
  UpdateManyGradeArgs: ["data", "where"],
  UpsertGradeArgs: ["where", "create", "update"],
  AggregateGradeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByGradeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueModulArgs: ["where"],
  FindFirstModulArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyModulArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateModulArgs: ["data"],
  CreateManyModulArgs: ["data", "skipDuplicates"],
  DeleteModulArgs: ["where"],
  UpdateModulArgs: ["data", "where"],
  DeleteManyModulArgs: ["where"],
  UpdateManyModulArgs: ["data", "where"],
  UpsertModulArgs: ["where", "create", "update"],
  AggregateModulArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByModulArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueClassArgs: ["where"],
  FindFirstClassArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyClassArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateClassArgs: ["data"],
  CreateManyClassArgs: ["data", "skipDuplicates"],
  DeleteClassArgs: ["where"],
  UpdateClassArgs: ["data", "where"],
  DeleteManyClassArgs: ["where"],
  UpdateManyClassArgs: ["data", "where"],
  UpsertClassArgs: ["where", "create", "update"],
  AggregateClassArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByClassArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStudentArgs: ["where"],
  FindFirstStudentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStudentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStudentArgs: ["data"],
  CreateManyStudentArgs: ["data", "skipDuplicates"],
  DeleteStudentArgs: ["where"],
  UpdateStudentArgs: ["data", "where"],
  DeleteManyStudentArgs: ["where"],
  UpdateManyStudentArgs: ["data", "where"],
  UpsertStudentArgs: ["where", "create", "update"],
  AggregateStudentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStudentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueExamRecordArgs: ["where"],
  FindFirstExamRecordArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExamRecordArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateExamRecordArgs: ["data"],
  CreateManyExamRecordArgs: ["data", "skipDuplicates"],
  DeleteExamRecordArgs: ["where"],
  UpdateExamRecordArgs: ["data", "where"],
  DeleteManyExamRecordArgs: ["where"],
  UpdateManyExamRecordArgs: ["data", "where"],
  UpsertExamRecordArgs: ["where", "create", "update"],
  AggregateExamRecordArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByExamRecordArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueExamArgs: ["where"],
  FindFirstExamArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExamArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateExamArgs: ["data"],
  CreateManyExamArgs: ["data", "skipDuplicates"],
  DeleteExamArgs: ["where"],
  UpdateExamArgs: ["data", "where"],
  DeleteManyExamArgs: ["where"],
  UpdateManyExamArgs: ["data", "where"],
  UpsertExamArgs: ["where", "create", "update"],
  AggregateExamArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByExamArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSubjectArgs: ["where"],
  FindFirstSubjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSubjectArgs: ["data"],
  CreateManySubjectArgs: ["data", "skipDuplicates"],
  DeleteSubjectArgs: ["where"],
  UpdateSubjectArgs: ["data", "where"],
  DeleteManySubjectArgs: ["where"],
  UpdateManySubjectArgs: ["data", "where"],
  UpsertSubjectArgs: ["where", "create", "update"],
  AggregateSubjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySubjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProfessorArgs: ["where"],
  FindFirstProfessorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfessorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProfessorArgs: ["data"],
  CreateManyProfessorArgs: ["data", "skipDuplicates"],
  DeleteProfessorArgs: ["where"],
  UpdateProfessorArgs: ["data", "where"],
  DeleteManyProfessorArgs: ["where"],
  UpdateManyProfessorArgs: ["data", "where"],
  UpsertProfessorArgs: ["where", "create", "update"],
  AggregateProfessorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProfessorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueExaminationPeriodArgs: ["where"],
  FindFirstExaminationPeriodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExaminationPeriodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateExaminationPeriodArgs: ["data"],
  CreateManyExaminationPeriodArgs: ["data", "skipDuplicates"],
  DeleteExaminationPeriodArgs: ["where"],
  UpdateExaminationPeriodArgs: ["data", "where"],
  DeleteManyExaminationPeriodArgs: ["where"],
  UpdateManyExaminationPeriodArgs: ["data", "where"],
  UpsertExaminationPeriodArgs: ["where", "create", "update"],
  AggregateExaminationPeriodArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByExaminationPeriodArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Grade: relationResolvers.GradeRelationsResolver,
  Modul: relationResolvers.ModulRelationsResolver,
  Class: relationResolvers.ClassRelationsResolver,
  Student: relationResolvers.StudentRelationsResolver,
  ExamRecord: relationResolvers.ExamRecordRelationsResolver,
  Exam: relationResolvers.ExamRelationsResolver,
  Subject: relationResolvers.SubjectRelationsResolver,
  Professor: relationResolvers.ProfessorRelationsResolver,
  ExaminationPeriod: relationResolvers.ExaminationPeriodRelationsResolver
};
const relationResolversInfo = {
  Grade: ["exam"],
  Modul: ["students", "subjects", "examinationPeriod"],
  Class: ["sudents"],
  Student: ["modul", "class", "exams"],
  ExamRecord: ["grade", "exam", "student"],
  Exam: ["subject", "examinationPeriod", "examRecord"],
  Subject: ["professor", "exam", "modul"],
  Professor: ["subjects"],
  ExaminationPeriod: ["modul", "exams"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Grade: ["id", "value"],
  Modul: ["id", "moduleName", "moduleCode"],
  Class: ["id", "classLabel"],
  Student: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  ExamRecord: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  Exam: ["id", "date", "subjectID", "exPeriodID"],
  Subject: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  Professor: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ExaminationPeriod: ["id", "name", "beginningDate", "endDate", "modulID"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateGrade: ["_count", "_avg", "_sum", "_min", "_max"],
  GradeGroupBy: ["id", "value", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateModul: ["_count", "_min", "_max"],
  ModulGroupBy: ["id", "moduleName", "moduleCode", "_count", "_min", "_max"],
  AggregateClass: ["_count", "_avg", "_sum", "_min", "_max"],
  ClassGroupBy: ["id", "classLabel", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStudent: ["_count", "_min", "_max"],
  StudentGroupBy: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID", "_count", "_min", "_max"],
  AggregateExamRecord: ["_count", "_avg", "_sum", "_min", "_max"],
  ExamRecordGroupBy: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateExam: ["_count", "_min", "_max"],
  ExamGroupBy: ["id", "date", "subjectID", "exPeriodID", "_count", "_min", "_max"],
  AggregateSubject: ["_count", "_avg", "_sum", "_min", "_max"],
  SubjectGroupBy: ["id", "subjectName", "espp", "professorID", "type", "modulID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfessor: ["_count", "_min", "_max"],
  ProfessorGroupBy: ["id", "firstName", "email", "lastName", "password", "jmbg", "role", "_count", "_min", "_max"],
  AggregateExaminationPeriod: ["_count", "_min", "_max"],
  ExaminationPeriodGroupBy: ["id", "name", "beginningDate", "endDate", "modulID", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  GradeCountAggregate: ["id", "value", "_all"],
  GradeAvgAggregate: ["value"],
  GradeSumAggregate: ["value"],
  GradeMinAggregate: ["id", "value"],
  GradeMaxAggregate: ["id", "value"],
  ModulCount: ["students", "subjects", "examinationPeriod"],
  ModulCountAggregate: ["id", "moduleName", "moduleCode", "_all"],
  ModulMinAggregate: ["id", "moduleName", "moduleCode"],
  ModulMaxAggregate: ["id", "moduleName", "moduleCode"],
  ClassCount: ["sudents"],
  ClassCountAggregate: ["id", "classLabel", "_all"],
  ClassAvgAggregate: ["classLabel"],
  ClassSumAggregate: ["classLabel"],
  ClassMinAggregate: ["id", "classLabel"],
  ClassMaxAggregate: ["id", "classLabel"],
  StudentCount: ["exams"],
  StudentCountAggregate: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID", "_all"],
  StudentMinAggregate: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  StudentMaxAggregate: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  ExamRecordCountAggregate: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed", "_all"],
  ExamRecordAvgAggregate: ["points"],
  ExamRecordSumAggregate: ["points"],
  ExamRecordMinAggregate: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamRecordMaxAggregate: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamCountAggregate: ["id", "date", "subjectID", "exPeriodID", "_all"],
  ExamMinAggregate: ["id", "date", "subjectID", "exPeriodID"],
  ExamMaxAggregate: ["id", "date", "subjectID", "exPeriodID"],
  SubjectCountAggregate: ["id", "subjectName", "espp", "professorID", "type", "modulID", "_all"],
  SubjectAvgAggregate: ["espp"],
  SubjectSumAggregate: ["espp"],
  SubjectMinAggregate: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  SubjectMaxAggregate: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  ProfessorCount: ["subjects"],
  ProfessorCountAggregate: ["id", "firstName", "email", "lastName", "password", "jmbg", "role", "_all"],
  ProfessorMinAggregate: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ProfessorMaxAggregate: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ExaminationPeriodCount: ["exams"],
  ExaminationPeriodCountAggregate: ["id", "name", "beginningDate", "endDate", "modulID", "_all"],
  ExaminationPeriodMinAggregate: ["id", "name", "beginningDate", "endDate", "modulID"],
  ExaminationPeriodMaxAggregate: ["id", "name", "beginningDate", "endDate", "modulID"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  GradeWhereInput: ["AND", "OR", "NOT", "id", "value", "exam"],
  GradeOrderByWithRelationInput: ["id", "value", "exam"],
  GradeWhereUniqueInput: ["id"],
  GradeOrderByWithAggregationInput: ["id", "value", "_count", "_avg", "_max", "_min", "_sum"],
  GradeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value"],
  ModulWhereInput: ["AND", "OR", "NOT", "id", "moduleName", "moduleCode", "students", "subjects", "examinationPeriod"],
  ModulOrderByWithRelationInput: ["id", "moduleName", "moduleCode", "students", "subjects", "examinationPeriod"],
  ModulWhereUniqueInput: ["id", "moduleName", "moduleCode"],
  ModulOrderByWithAggregationInput: ["id", "moduleName", "moduleCode", "_count", "_max", "_min"],
  ModulScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "moduleName", "moduleCode"],
  ClassWhereInput: ["AND", "OR", "NOT", "id", "classLabel", "sudents"],
  ClassOrderByWithRelationInput: ["id", "classLabel", "sudents"],
  ClassWhereUniqueInput: ["id"],
  ClassOrderByWithAggregationInput: ["id", "classLabel", "_count", "_avg", "_max", "_min", "_sum"],
  ClassScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "classLabel"],
  StudentWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "modulID", "class", "classID", "exams"],
  StudentOrderByWithRelationInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "modulID", "class", "classID", "exams"],
  StudentWhereUniqueInput: ["id", "email", "jmbg", "brind"],
  StudentOrderByWithAggregationInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID", "_count", "_max", "_min"],
  StudentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  ExamRecordWhereInput: ["AND", "OR", "NOT", "id", "points", "passed", "grade", "gradeID", "exam", "examID", "student", "studentID", "singed"],
  ExamRecordOrderByWithRelationInput: ["id", "points", "passed", "grade", "gradeID", "exam", "examID", "student", "studentID", "singed"],
  ExamRecordWhereUniqueInput: ["id", "gradeID", "examID"],
  ExamRecordOrderByWithAggregationInput: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed", "_count", "_avg", "_max", "_min", "_sum"],
  ExamRecordScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamWhereInput: ["AND", "OR", "NOT", "id", "date", "subject", "subjectID", "examinationPeriod", "exPeriodID", "examRecord"],
  ExamOrderByWithRelationInput: ["id", "date", "subject", "subjectID", "examinationPeriod", "exPeriodID", "examRecord"],
  ExamWhereUniqueInput: ["id", "subjectID"],
  ExamOrderByWithAggregationInput: ["id", "date", "subjectID", "exPeriodID", "_count", "_max", "_min"],
  ExamScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "date", "subjectID", "exPeriodID"],
  SubjectWhereInput: ["AND", "OR", "NOT", "id", "subjectName", "espp", "professor", "professorID", "exam", "type", "modul", "modulID"],
  SubjectOrderByWithRelationInput: ["id", "subjectName", "espp", "professor", "professorID", "exam", "type", "modul", "modulID"],
  SubjectWhereUniqueInput: ["id", "subjectName"],
  SubjectOrderByWithAggregationInput: ["id", "subjectName", "espp", "professorID", "type", "modulID", "_count", "_avg", "_max", "_min", "_sum"],
  SubjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "subjectName", "espp", "professorID", "type", "modulID"],
  ProfessorWhereInput: ["AND", "OR", "NOT", "id", "firstName", "email", "lastName", "subjects", "password", "jmbg", "role"],
  ProfessorOrderByWithRelationInput: ["id", "firstName", "email", "lastName", "subjects", "password", "jmbg", "role"],
  ProfessorWhereUniqueInput: ["id", "email", "jmbg"],
  ProfessorOrderByWithAggregationInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role", "_count", "_max", "_min"],
  ProfessorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ExaminationPeriodWhereInput: ["AND", "OR", "NOT", "id", "name", "beginningDate", "endDate", "modul", "modulID", "exams"],
  ExaminationPeriodOrderByWithRelationInput: ["id", "name", "beginningDate", "endDate", "modul", "modulID", "exams"],
  ExaminationPeriodWhereUniqueInput: ["id"],
  ExaminationPeriodOrderByWithAggregationInput: ["id", "name", "beginningDate", "endDate", "modulID", "_count", "_max", "_min"],
  ExaminationPeriodScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "beginningDate", "endDate", "modulID"],
  GradeCreateInput: ["id", "value", "exam"],
  GradeUpdateInput: ["id", "value", "exam"],
  GradeCreateManyInput: ["id", "value"],
  GradeUpdateManyMutationInput: ["id", "value"],
  ModulCreateInput: ["id", "moduleName", "moduleCode", "students", "subjects", "examinationPeriod"],
  ModulUpdateInput: ["id", "moduleName", "moduleCode", "students", "subjects", "examinationPeriod"],
  ModulCreateManyInput: ["id", "moduleName", "moduleCode"],
  ModulUpdateManyMutationInput: ["id", "moduleName", "moduleCode"],
  ClassCreateInput: ["id", "classLabel", "sudents"],
  ClassUpdateInput: ["id", "classLabel", "sudents"],
  ClassCreateManyInput: ["id", "classLabel"],
  ClassUpdateManyMutationInput: ["id", "classLabel"],
  StudentCreateInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "class", "exams"],
  StudentUpdateInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "class", "exams"],
  StudentCreateManyInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  StudentUpdateManyMutationInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role"],
  ExamRecordCreateInput: ["id", "points", "passed", "singed", "grade", "exam", "student"],
  ExamRecordUpdateInput: ["id", "points", "passed", "singed", "grade", "exam", "student"],
  ExamRecordCreateManyInput: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamRecordUpdateManyMutationInput: ["id", "points", "passed", "singed"],
  ExamCreateInput: ["id", "date", "subject", "examinationPeriod", "examRecord"],
  ExamUpdateInput: ["id", "date", "subject", "examinationPeriod", "examRecord"],
  ExamCreateManyInput: ["id", "date", "subjectID", "exPeriodID"],
  ExamUpdateManyMutationInput: ["id", "date"],
  SubjectCreateInput: ["id", "subjectName", "espp", "type", "professor", "exam", "modul"],
  SubjectUpdateInput: ["id", "subjectName", "espp", "type", "professor", "exam", "modul"],
  SubjectCreateManyInput: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  SubjectUpdateManyMutationInput: ["id", "subjectName", "espp", "type"],
  ProfessorCreateInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role", "subjects"],
  ProfessorUpdateInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role", "subjects"],
  ProfessorCreateManyInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ProfessorUpdateManyMutationInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ExaminationPeriodCreateInput: ["id", "name", "beginningDate", "endDate", "modul", "exams"],
  ExaminationPeriodUpdateInput: ["id", "name", "beginningDate", "endDate", "modul", "exams"],
  ExaminationPeriodCreateManyInput: ["id", "name", "beginningDate", "endDate", "modulID"],
  ExaminationPeriodUpdateManyMutationInput: ["id", "name", "beginningDate", "endDate"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ExamRecordRelationFilter: ["is", "isNot"],
  GradeCountOrderByAggregateInput: ["id", "value"],
  GradeAvgOrderByAggregateInput: ["value"],
  GradeMaxOrderByAggregateInput: ["id", "value"],
  GradeMinOrderByAggregateInput: ["id", "value"],
  GradeSumOrderByAggregateInput: ["value"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StudentListRelationFilter: ["every", "some", "none"],
  SubjectListRelationFilter: ["every", "some", "none"],
  ExaminationPeriodListRelationFilter: ["every", "some", "none"],
  StudentOrderByRelationAggregateInput: ["_count"],
  SubjectOrderByRelationAggregateInput: ["_count"],
  ExaminationPeriodOrderByRelationAggregateInput: ["_count"],
  ModulCountOrderByAggregateInput: ["id", "moduleName", "moduleCode"],
  ModulMaxOrderByAggregateInput: ["id", "moduleName", "moduleCode"],
  ModulMinOrderByAggregateInput: ["id", "moduleName", "moduleCode"],
  ClassCountOrderByAggregateInput: ["id", "classLabel"],
  ClassAvgOrderByAggregateInput: ["classLabel"],
  ClassMaxOrderByAggregateInput: ["id", "classLabel"],
  ClassMinOrderByAggregateInput: ["id", "classLabel"],
  ClassSumOrderByAggregateInput: ["classLabel"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  ModulRelationFilter: ["is", "isNot"],
  ClassRelationFilter: ["is", "isNot"],
  ExamRecordListRelationFilter: ["every", "some", "none"],
  ExamRecordOrderByRelationAggregateInput: ["_count"],
  StudentCountOrderByAggregateInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  StudentMaxOrderByAggregateInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  StudentMinOrderByAggregateInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  GradeRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ExamRelationFilter: ["is", "isNot"],
  StudentRelationFilter: ["is", "isNot"],
  ExamRecordCountOrderByAggregateInput: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamRecordAvgOrderByAggregateInput: ["points"],
  ExamRecordMaxOrderByAggregateInput: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamRecordMinOrderByAggregateInput: ["id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  ExamRecordSumOrderByAggregateInput: ["points"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  SubjectRelationFilter: ["is", "isNot"],
  ExaminationPeriodRelationFilter: ["is", "isNot"],
  ExamCountOrderByAggregateInput: ["id", "date", "subjectID", "exPeriodID"],
  ExamMaxOrderByAggregateInput: ["id", "date", "subjectID", "exPeriodID"],
  ExamMinOrderByAggregateInput: ["id", "date", "subjectID", "exPeriodID"],
  ProfessorRelationFilter: ["is", "isNot"],
  EnumSubjectTypeFilter: ["equals", "in", "notIn", "not"],
  SubjectCountOrderByAggregateInput: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  SubjectAvgOrderByAggregateInput: ["espp"],
  SubjectMaxOrderByAggregateInput: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  SubjectMinOrderByAggregateInput: ["id", "subjectName", "espp", "professorID", "type", "modulID"],
  SubjectSumOrderByAggregateInput: ["espp"],
  EnumSubjectTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProfessorCountOrderByAggregateInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ProfessorMaxOrderByAggregateInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ProfessorMinOrderByAggregateInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ExamListRelationFilter: ["every", "some", "none"],
  ExamOrderByRelationAggregateInput: ["_count"],
  ExaminationPeriodCountOrderByAggregateInput: ["id", "name", "beginningDate", "endDate", "modulID"],
  ExaminationPeriodMaxOrderByAggregateInput: ["id", "name", "beginningDate", "endDate", "modulID"],
  ExaminationPeriodMinOrderByAggregateInput: ["id", "name", "beginningDate", "endDate", "modulID"],
  ExamRecordCreateNestedOneWithoutGradeInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ExamRecordUpdateOneWithoutGradeInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  StudentCreateNestedManyWithoutModulInput: ["create", "connectOrCreate", "createMany", "connect"],
  SubjectCreateNestedManyWithoutModulInput: ["create", "connectOrCreate", "createMany", "connect"],
  ExaminationPeriodCreateNestedManyWithoutModulInput: ["create", "connectOrCreate", "createMany", "connect"],
  StudentUpdateManyWithoutModulInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SubjectUpdateManyWithoutModulInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExaminationPeriodUpdateManyWithoutModulInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StudentCreateNestedManyWithoutClassInput: ["create", "connectOrCreate", "createMany", "connect"],
  StudentUpdateManyWithoutClassInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ModulCreateNestedOneWithoutStudentsInput: ["create", "connectOrCreate", "connect"],
  ClassCreateNestedOneWithoutSudentsInput: ["create", "connectOrCreate", "connect"],
  ExamRecordCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  ModulUpdateOneRequiredWithoutStudentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ClassUpdateOneRequiredWithoutSudentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ExamRecordUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GradeCreateNestedOneWithoutExamInput: ["create", "connectOrCreate", "connect"],
  ExamCreateNestedOneWithoutExamRecordInput: ["create", "connectOrCreate", "connect"],
  StudentCreateNestedOneWithoutExamsInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  GradeUpdateOneWithoutExamInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ExamUpdateOneWithoutExamRecordInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  StudentUpdateOneWithoutExamsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  SubjectCreateNestedOneWithoutExamInput: ["create", "connectOrCreate", "connect"],
  ExaminationPeriodCreateNestedOneWithoutExamsInput: ["create", "connectOrCreate", "connect"],
  ExamRecordCreateNestedOneWithoutExamInput: ["create", "connectOrCreate", "connect"],
  SubjectUpdateOneWithoutExamInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ExaminationPeriodUpdateOneWithoutExamsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ExamRecordUpdateOneWithoutExamInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProfessorCreateNestedOneWithoutSubjectsInput: ["create", "connectOrCreate", "connect"],
  ExamCreateNestedOneWithoutSubjectInput: ["create", "connectOrCreate", "connect"],
  ModulCreateNestedOneWithoutSubjectsInput: ["create", "connectOrCreate", "connect"],
  EnumSubjectTypeFieldUpdateOperationsInput: ["set"],
  ProfessorUpdateOneRequiredWithoutSubjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ExamUpdateOneWithoutSubjectInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ModulUpdateOneRequiredWithoutSubjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SubjectCreateNestedManyWithoutProfessorInput: ["create", "connectOrCreate", "createMany", "connect"],
  SubjectUpdateManyWithoutProfessorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ModulCreateNestedOneWithoutExaminationPeriodInput: ["create", "connectOrCreate", "connect"],
  ExamCreateNestedManyWithoutExaminationPeriodInput: ["create", "connectOrCreate", "createMany", "connect"],
  ModulUpdateOneWithoutExaminationPeriodInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ExamUpdateManyWithoutExaminationPeriodInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumSubjectTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumSubjectTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ExamRecordCreateWithoutGradeInput: ["id", "points", "passed", "singed", "exam", "student"],
  ExamRecordCreateOrConnectWithoutGradeInput: ["where", "create"],
  ExamRecordUpsertWithoutGradeInput: ["update", "create"],
  ExamRecordUpdateWithoutGradeInput: ["id", "points", "passed", "singed", "exam", "student"],
  StudentCreateWithoutModulInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "class", "exams"],
  StudentCreateOrConnectWithoutModulInput: ["where", "create"],
  StudentCreateManyModulInputEnvelope: ["data", "skipDuplicates"],
  SubjectCreateWithoutModulInput: ["id", "subjectName", "espp", "type", "professor", "exam"],
  SubjectCreateOrConnectWithoutModulInput: ["where", "create"],
  SubjectCreateManyModulInputEnvelope: ["data", "skipDuplicates"],
  ExaminationPeriodCreateWithoutModulInput: ["id", "name", "beginningDate", "endDate", "exams"],
  ExaminationPeriodCreateOrConnectWithoutModulInput: ["where", "create"],
  ExaminationPeriodCreateManyModulInputEnvelope: ["data", "skipDuplicates"],
  StudentUpsertWithWhereUniqueWithoutModulInput: ["where", "update", "create"],
  StudentUpdateWithWhereUniqueWithoutModulInput: ["where", "data"],
  StudentUpdateManyWithWhereWithoutModulInput: ["where", "data"],
  StudentScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID", "classID"],
  SubjectUpsertWithWhereUniqueWithoutModulInput: ["where", "update", "create"],
  SubjectUpdateWithWhereUniqueWithoutModulInput: ["where", "data"],
  SubjectUpdateManyWithWhereWithoutModulInput: ["where", "data"],
  SubjectScalarWhereInput: ["AND", "OR", "NOT", "id", "subjectName", "espp", "professorID", "type", "modulID"],
  ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput: ["where", "update", "create"],
  ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput: ["where", "data"],
  ExaminationPeriodUpdateManyWithWhereWithoutModulInput: ["where", "data"],
  ExaminationPeriodScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "beginningDate", "endDate", "modulID"],
  StudentCreateWithoutClassInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "exams"],
  StudentCreateOrConnectWithoutClassInput: ["where", "create"],
  StudentCreateManyClassInputEnvelope: ["data", "skipDuplicates"],
  StudentUpsertWithWhereUniqueWithoutClassInput: ["where", "update", "create"],
  StudentUpdateWithWhereUniqueWithoutClassInput: ["where", "data"],
  StudentUpdateManyWithWhereWithoutClassInput: ["where", "data"],
  ModulCreateWithoutStudentsInput: ["id", "moduleName", "moduleCode", "subjects", "examinationPeriod"],
  ModulCreateOrConnectWithoutStudentsInput: ["where", "create"],
  ClassCreateWithoutSudentsInput: ["id", "classLabel"],
  ClassCreateOrConnectWithoutSudentsInput: ["where", "create"],
  ExamRecordCreateWithoutStudentInput: ["id", "points", "passed", "singed", "grade", "exam"],
  ExamRecordCreateOrConnectWithoutStudentInput: ["where", "create"],
  ExamRecordCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  ModulUpsertWithoutStudentsInput: ["update", "create"],
  ModulUpdateWithoutStudentsInput: ["id", "moduleName", "moduleCode", "subjects", "examinationPeriod"],
  ClassUpsertWithoutSudentsInput: ["update", "create"],
  ClassUpdateWithoutSudentsInput: ["id", "classLabel"],
  ExamRecordUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  ExamRecordUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  ExamRecordUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  ExamRecordScalarWhereInput: ["AND", "OR", "NOT", "id", "points", "passed", "gradeID", "examID", "studentID", "singed"],
  GradeCreateWithoutExamInput: ["id", "value"],
  GradeCreateOrConnectWithoutExamInput: ["where", "create"],
  ExamCreateWithoutExamRecordInput: ["id", "date", "subject", "examinationPeriod"],
  ExamCreateOrConnectWithoutExamRecordInput: ["where", "create"],
  StudentCreateWithoutExamsInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "class"],
  StudentCreateOrConnectWithoutExamsInput: ["where", "create"],
  GradeUpsertWithoutExamInput: ["update", "create"],
  GradeUpdateWithoutExamInput: ["id", "value"],
  ExamUpsertWithoutExamRecordInput: ["update", "create"],
  ExamUpdateWithoutExamRecordInput: ["id", "date", "subject", "examinationPeriod"],
  StudentUpsertWithoutExamsInput: ["update", "create"],
  StudentUpdateWithoutExamsInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "class"],
  SubjectCreateWithoutExamInput: ["id", "subjectName", "espp", "type", "professor", "modul"],
  SubjectCreateOrConnectWithoutExamInput: ["where", "create"],
  ExaminationPeriodCreateWithoutExamsInput: ["id", "name", "beginningDate", "endDate", "modul"],
  ExaminationPeriodCreateOrConnectWithoutExamsInput: ["where", "create"],
  ExamRecordCreateWithoutExamInput: ["id", "points", "passed", "singed", "grade", "student"],
  ExamRecordCreateOrConnectWithoutExamInput: ["where", "create"],
  SubjectUpsertWithoutExamInput: ["update", "create"],
  SubjectUpdateWithoutExamInput: ["id", "subjectName", "espp", "type", "professor", "modul"],
  ExaminationPeriodUpsertWithoutExamsInput: ["update", "create"],
  ExaminationPeriodUpdateWithoutExamsInput: ["id", "name", "beginningDate", "endDate", "modul"],
  ExamRecordUpsertWithoutExamInput: ["update", "create"],
  ExamRecordUpdateWithoutExamInput: ["id", "points", "passed", "singed", "grade", "student"],
  ProfessorCreateWithoutSubjectsInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ProfessorCreateOrConnectWithoutSubjectsInput: ["where", "create"],
  ExamCreateWithoutSubjectInput: ["id", "date", "examinationPeriod", "examRecord"],
  ExamCreateOrConnectWithoutSubjectInput: ["where", "create"],
  ModulCreateWithoutSubjectsInput: ["id", "moduleName", "moduleCode", "students", "examinationPeriod"],
  ModulCreateOrConnectWithoutSubjectsInput: ["where", "create"],
  ProfessorUpsertWithoutSubjectsInput: ["update", "create"],
  ProfessorUpdateWithoutSubjectsInput: ["id", "firstName", "email", "lastName", "password", "jmbg", "role"],
  ExamUpsertWithoutSubjectInput: ["update", "create"],
  ExamUpdateWithoutSubjectInput: ["id", "date", "examinationPeriod", "examRecord"],
  ModulUpsertWithoutSubjectsInput: ["update", "create"],
  ModulUpdateWithoutSubjectsInput: ["id", "moduleName", "moduleCode", "students", "examinationPeriod"],
  SubjectCreateWithoutProfessorInput: ["id", "subjectName", "espp", "type", "exam", "modul"],
  SubjectCreateOrConnectWithoutProfessorInput: ["where", "create"],
  SubjectCreateManyProfessorInputEnvelope: ["data", "skipDuplicates"],
  SubjectUpsertWithWhereUniqueWithoutProfessorInput: ["where", "update", "create"],
  SubjectUpdateWithWhereUniqueWithoutProfessorInput: ["where", "data"],
  SubjectUpdateManyWithWhereWithoutProfessorInput: ["where", "data"],
  ModulCreateWithoutExaminationPeriodInput: ["id", "moduleName", "moduleCode", "students", "subjects"],
  ModulCreateOrConnectWithoutExaminationPeriodInput: ["where", "create"],
  ExamCreateWithoutExaminationPeriodInput: ["id", "date", "subject", "examRecord"],
  ExamCreateOrConnectWithoutExaminationPeriodInput: ["where", "create"],
  ExamCreateManyExaminationPeriodInputEnvelope: ["data", "skipDuplicates"],
  ModulUpsertWithoutExaminationPeriodInput: ["update", "create"],
  ModulUpdateWithoutExaminationPeriodInput: ["id", "moduleName", "moduleCode", "students", "subjects"],
  ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput: ["where", "update", "create"],
  ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput: ["where", "data"],
  ExamUpdateManyWithWhereWithoutExaminationPeriodInput: ["where", "data"],
  ExamScalarWhereInput: ["AND", "OR", "NOT", "id", "date", "subjectID", "exPeriodID"],
  StudentCreateManyModulInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "classID"],
  SubjectCreateManyModulInput: ["id", "subjectName", "espp", "professorID", "type"],
  ExaminationPeriodCreateManyModulInput: ["id", "name", "beginningDate", "endDate"],
  StudentUpdateWithoutModulInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "class", "exams"],
  SubjectUpdateWithoutModulInput: ["id", "subjectName", "espp", "type", "professor", "exam"],
  ExaminationPeriodUpdateWithoutModulInput: ["id", "name", "beginningDate", "endDate", "exams"],
  StudentCreateManyClassInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modulID"],
  StudentUpdateWithoutClassInput: ["id", "email", "firstName", "middleName", "lastName", "password", "jmbg", "brind", "birthDate", "role", "modul", "exams"],
  ExamRecordCreateManyStudentInput: ["id", "points", "passed", "gradeID", "examID", "singed"],
  ExamRecordUpdateWithoutStudentInput: ["id", "points", "passed", "singed", "grade", "exam"],
  SubjectCreateManyProfessorInput: ["id", "subjectName", "espp", "type", "modulID"],
  SubjectUpdateWithoutProfessorInput: ["id", "subjectName", "espp", "type", "exam", "modul"],
  ExamCreateManyExaminationPeriodInput: ["id", "date", "subjectID"],
  ExamUpdateWithoutExaminationPeriodInput: ["id", "date", "subject", "examRecord"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

