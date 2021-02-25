import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email } = request.body;
  
      const userRepository = getCustomRepository(UserRepository);
  
      const userAllReadyExists = await userRepository.findOne({ email });

      if (userAllReadyExists) {
        return response.status(400).json({
          error: 'Email alread in use'
        });
      }

      const user = userRepository.create({
        name, email
      });

      await userRepository.save(user);
  
      return response.status(201).json(user);
      
    } catch (error) {
      console.log(error);

      return response.status(error.status || 500).json(error.message || error);
    }
  }

  async index(request: Request, response: Response) {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const users = await userRepository.find();

      return response.json(users);

    } catch (error) {
      console.log(error);

      return response.status(error.status || 500).json(error.message || error);
    }
  }
}

export { UserController };
