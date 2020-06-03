import boom from '@hapi/boom';
// import Car from '../models/Car';
import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';
import { UserRepository } from '../repositories/UserRepository';

export const signup = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
        const repository = new UserRepository();
        const response = repository.signup(req.body);
        // console.log(req.body)
        return response;
		// const car = new Car(req.body);
		// return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};