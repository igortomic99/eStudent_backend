
import { MyContext } from "../context";
import { MiddlewareFn } from "type-graphql";

export const isAuth:MiddlewareFn<MyContext> =({context},next) =>{
    if(!context.req.session.studentID){
        throw new Error('ER002')
    };
    return next();
} 