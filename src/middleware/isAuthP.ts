import { MyContext } from "../context";
import { MiddlewareFn } from "type-graphql";

export const isAuthP:MiddlewareFn<MyContext> =({context},next) =>{
    if(!context.req.session.professorID){
        throw new Error('Not authenticated')
    };
    return next();
} 