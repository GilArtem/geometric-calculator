import { Figure } from "./Figure.js";

/** Класс: Квадрат */ 
export class Square extends Figure{
    /**
     * Конструктор класса 
     * @param side - Длина стороны квадрата
     */
    constructor(private side: number){
        super();
        this.validationArgs(this.side);
    }

    /**
     * Функция расчета площади квадрата
     * @returns {number}
     */
    calculateArea(): number {
        const area = this.side ** 2;
        this.triggerCalculateEvent();
        return area;
    }

    /**
     * Функция расчета периметра квадрата
     * @returns {number}
     */
    calculatePerimeter(): number {
        const perimeter = this.side * 4;
        this.triggerCalculateEvent();
        return perimeter;
    }

    makeOperation(operationType: string): number {
        /** Объект, в котором:
         * ключи - типы операций в виде строки,
         * значения — соответствующие методы класса
         */
        const operations: { [key: string]: () => number } = {
            area: this.calculateArea,
            perimeter: this.calculatePerimeter
        };

        return operations[operationType]?.call(this);
    }
}