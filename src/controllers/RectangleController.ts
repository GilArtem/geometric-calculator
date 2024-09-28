import { Request, Response } from "express";
import { Rectangle } from "../models/Rectangle.js";

/**
 * Класс-обработчик запросов на вычисление свойств прямоугольника
 */
export class RectangleController {
     /**
     * Обрабатывает запрос на вычисление 
     * 
     * @param req - Объект запроса, содержащий данные параметров и типа операции
     * @param res - Объект ответа, для отправки результата клиенту
     */
    calculate(req: Request, res: Response): void {
        try {
            const operationType: string = req.body.operationType;
            const width: number = parseFloat(req.body.width);
            const height: number = parseFloat(req.body.height);
            
            const rectangle = new Rectangle(width, height);
            const result: number = rectangle.makeOperation(operationType);

            res.json({ result });
        } catch(err) {
            res.status(400).json({ message: (err as Error).message });
        }
        
    }
}
