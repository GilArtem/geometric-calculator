import { Request, Response } from "express";
import { Circle } from "../models/Circle.js";

/**
 * Класс-обработчик запросов на вычисление свойств круга 
 */
export class CircleController {
    /**
     * Обрабатывает запрос на вычисление 
     * 
     * @param req - Объект запроса, содержащий данные параметров и типа операции
     * @param res - Объект ответа, для отправки результата клиенту
     */
    calculate(req: Request, res: Response): void {
        try {
            const radius: number = parseFloat(req.body.radius);
            const operationType: string = req.body.operationType;
        
            const circle = new Circle(radius);
            const result: number = circle.makeOperation(operationType);
    
            res.json({ result });  
        } catch (err) {
            res.status(400).json({ message: (err as Error).message });
        }
    }
}
