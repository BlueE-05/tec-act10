// 3. Controller Calculations

import CalculationsService from '@/db/calculations';
import Circle from '@/types/controller/Circle';
import Triangle from '@/types/controller/Triangle';
import Rectangle from '@/types/controller/Rectangle';

export default class CalculationsController {
    private service = new CalculationsService();

    async getAreaCircle(): Promise<Circle> {
        const circleDB = await this.service.getCircle();
        const area = Math.PI * (circleDB.radius ** 2);
        
        const circle: Circle = {
            radius: circleDB.radius,
            area: area
        };
    
        return circle;
    }

    async getAreaTriangle(): Promise<Triangle> {
        const triangleDB = await this.service.getTriangle();
        const area = (triangleDB.base * triangleDB.height) / 2;

        const triangle: Triangle = {
            base: triangleDB.base,
            height: triangleDB.height,
            area: area
        }
        return triangle;
    }

    async getAreaRectangle(): Promise<Rectangle> {
        const rectangleDB = await this.service.getRectangle();
        const area = rectangleDB.base * rectangleDB.height;

        const rectangle: Rectangle = {
            base: rectangleDB.base,
            height: rectangleDB.height,
            area: area
        }
        return rectangle;
    }
}