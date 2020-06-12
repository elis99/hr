import { RouteOptions } from 'fastify';
import * as AuthController from '../http/controllers/AuthController'; 
import * as UserController from '../http/controllers/UserController';
import SignupSchema from '../http/schemas/users/SignupSchema';

const signup: RouteOptions = {
    method: 'POST',
	url: '/api/signup',
    handler: AuthController.signup,
    schema: SignupSchema
}

const profile: RouteOptions = {
    method: 'GET',
    url: '/api/user/profile',
    handler: UserController.profile
}


const routes = [signup];
export default routes;