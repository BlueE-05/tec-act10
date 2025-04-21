//* 2. Handler Contacts

import { Request, Response, NextFunction, response } from 'express';
import CalculationsController from '@/controllers/calculations';
import AreaResponse from '@/types/handler/AreaResponse';

export default class CalculationsHandler {
    private calcController: CalculationsController;

    constructor() {
        this.calcController = new CalculationsController();
    }

    getAreaCircle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const circle = await this.calcController.getAreaCircle();
            const response: AreaResponse = { area: circle.area };
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    getAreaTriangle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const triangle = await this.calcController.getAreaTriangle();
            const response: AreaResponse = { area: triangle.area };
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    getAreaRectangle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rectangle = await this.calcController.getAreaRectangle();
            const response: AreaResponse = { area: rectangle.area };
            res.json(response);
        } catch (error) {
            next(error);
        }
    };
}