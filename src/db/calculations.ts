//* 4. DB Contact

import CircleDB from "@/types/db/CircleDB";
import TriangleDB from "@/types/db/TriangleDB";
import RectangleDB from "@/types/db/RectangleDB";

export default class CalculationsService {
    private circle: CircleDB = {
        radius: 5
    };

    private triangle: TriangleDB = {
        base: 10,
        height: 6
    };

    private rectangle: RectangleDB = {
        base: 8,
        height: 4
    };

    constructor() {}

    async getCircle(): Promise<CircleDB> {
        return this.circle;
    }

    async getTriangle(): Promise<TriangleDB> {
        return this.triangle;
    }

    async getRectangle(): Promise<RectangleDB> {
        return this.rectangle;
    }
}