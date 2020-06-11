import { UserRepository } from "../repositories/UserRepository"

const getProfile = async () => {
    try {
        const repository = new UserRepository();
        const response = repository.profile();
        
        return response;

    } catch (err) {

    }
} 