import { Request, Response } from "express";
import { Square } from "../models/Square.js";

/**
 * Класс-обработчик запросов на вычисление свойств квадрата
 */
export class SquareController{
     /**
     * Обрабатывает запрос на вычисление 
     * 
     * @param req - Объект запроса, содержащий данные параметров и типа операции
     * @param res - Объект ответа, для отправки результата клиенту
     */
    calculate(req: Request, res: Response){
        try{
            const side: number = parseFloat(req.body.side);
            const operationType: string = req.body.operationType;
        
            const square = new Square(side);
            const result: number = square.makeOperation(operationType);

            res.json({ result });
        } catch(err) {
            res.status(400).json({ message: (err as Error).message });
        };
    }
}