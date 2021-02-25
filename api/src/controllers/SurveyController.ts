import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveyRepository";

class SurveyController {
  async create(request: Request, response: Response) {
    try {
      const { title, description } = request.body;

      const surveyRepository = getCustomRepository(SurveyRepository);

      const survey = surveyRepository.create({
        title,
        description
      });

      await surveyRepository.save(survey);

      return response.status(201).json(survey);

    } catch (error) {
      console.log(error);

      return response.status(error.status || 500).json(error.message || error);
    }
  }

  async index(request: Request, response: Response) {
    try {
      const surveyRepository = getCustomRepository(SurveyRepository);

      const surveys = await surveyRepository.find();

      return response.json(surveys);

    } catch (error) {
      console.log(error);

      return response.status(error.status || 500).json(error.message || error);
    }
  }
}

export { SurveyController };