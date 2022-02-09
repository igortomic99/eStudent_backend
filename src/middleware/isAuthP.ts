import { MyContext } from "../context";
import { MiddlewareFn } from "type-graphql";

export const isAuthP:MiddlewareFn<MyContext> =({context},next) =>{
    ///Checking if professor is loggen in
    if(!context.req.session.professorID){
        throw new Error('Not authenticated')
    };
    return next();
} 