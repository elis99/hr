import { RouteOptions } from 'fastify';
import * as AuthController from '../http/controllers/AuthController'; 

const signup: RouteOptions = {
    method: 'POST',
	url: '/api/signup',
    handler: AuthController.signup,
    // schema: AddCarSchema
}

const routes = [signup];
export default routes;