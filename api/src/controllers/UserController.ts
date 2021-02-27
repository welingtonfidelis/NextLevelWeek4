import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
    });

    // await schema.validate(request.body, { abortEarly: false });

    if (!(await schema.isValid(request.body, { abortEarly: false }))) {
      throw new AppError("Validation failed!");
    }

    const userRepository = getCustomRepository(UserRepository);

    const userAllReadyExists = await userRepository.findOne({ email });

    if (userAllReadyExists) {
      throw new AppError("Email alread in use!");
    }

    const user = userRepository.create({
      name, email
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }

  async index(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    return response.json(users);
  }
}

export { UserController };
