import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email } = request.body;
  
      const userRepository = getRepository(User);
  
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
  
      return response.json(user);
      
    } catch (error) {
      console.log(error);

      response.status(error.status || 500).json(error.message || error);
    }
  }
}

export { UserController };