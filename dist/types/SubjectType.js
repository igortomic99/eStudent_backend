"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectType = void 0;
const type_graphql_1 = require("type-graphql");
var SubjectType;
(function (SubjectType) {
    SubjectType["REQUIRED"] = "REQUIRED";
    SubjectType["ELECTIVE"] = "ELECTIVE";
})(SubjectType = exports.SubjectType || (exports.SubjectType = {}));
(0, type_graphql_1.registerEnumType)(SubjectType, {
    name: "SubjectType",
    description: undefined,
});
//# sourceMappingURL=SubjectType.js.map