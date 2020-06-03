import { RouteOptions } from 'fastify';
import * as AuthController from '../http/controllers/AuthController'; 
import SignupSchema from '../http/schemas/users/SignupSchema';

const signup: RouteOptions = {
    method: 'POST',
	url: '/api/signup',
    handler: AuthController.signup,
    schema: SignupSchema
}

const routes = [signup];
export default routes;