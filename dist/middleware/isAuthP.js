"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthP = void 0;
const isAuthP = ({ context }, next) => {
    if (!context.req.session.professorID) {
        throw new Error('Not authenticated');
    }
    ;
    return next();
};
exports.isAuthP = isAuthP;
//# sourceMappingURL=isAuthP.js.map