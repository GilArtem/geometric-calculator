import { Response, Request } from "express";
import { EquilateralTriangle } from "../models/EquilateralTriangle.js";

/**
 * Класс-обработчик запросов на вычисление свойств равностороннего треугольника
 */
export class EquilateralTriangleController {
     /**
     * Обрабатывает запрос на вычисление 
     * 
     * @param req - Объект запроса, содержащий данные параметров и типа операции
     * @param res - Объект ответа, для отправки результата клиенту
     */
    calculate(req: Request, res: Response): void {
        try {
            const side: number = parseFloat(req.body.side);
            const operationType: string = req.body.operationType;
            
            const equilateralTriangle = new EquilateralTriangle(side);
            const result: number = equilateralTriangle.makeOperation(operationType);
    
            res.json({ result });
        } catch (err) {
            res.status(400).json({ message: (err as Error).message });
        }
        
    } 
}