"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const isAuth = ({ context }, next) => {
    if (!context.req.session.studentID) {
        throw new Error('ER002');
    }
    ;
    return next();
};
exports.isAuth = isAuth;
//# sourceMappingURL=isAuth.js.map