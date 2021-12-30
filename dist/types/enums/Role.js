"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const type_graphql_1 = require("type-graphql");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["STUDENT"] = "STUDENT";
    Role["PROFESSOR"] = "PROFESSOR";
})(Role = exports.Role || (exports.Role = {}));
(0, type_graphql_1.registerEnumType)(Role, {
    name: "Role",
    description: undefined,
});
//# sourceMappingURL=Role.js.map