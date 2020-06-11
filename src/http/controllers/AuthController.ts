import boom, { expectationFailed } from '@hapi/boom';
// import Car from '../models/Car';
import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';

const signup = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
        const service = new UserService();
        const response = service.signup(req.body);
        // console.log(req.body)
        return response;
		// const car = new Car(req.body);
		// return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

export default [signup];