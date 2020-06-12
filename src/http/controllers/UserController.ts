import { UserRepository } from "../repositories/UserRepository"

export const profile = async () => {
    try {
        const repository = new UserRepository();
        const response = repository.profile();
        
        return response;

    } catch (err) {

    }
} 