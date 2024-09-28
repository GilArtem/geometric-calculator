import { Figure } from "./Figure.js";

/**  Класс: Равносторонний треугольник */
export class EquilateralTriangle extends Figure {
    /**
     * Конструктор класса
     * @param side - Длина стороны равностороннего треугольника
     */
    constructor (private side: number) {
        super();
        this.validationArgs(this.side);
    }

    /**
     * Функция расчета площади равностороннего треугольника
     * @returns {number}   
     */
    calculateArea(): number {
        const height = (Math.sqrt(3) / 2) * this.side;
        const area = (this.side * height) / 2;
        this.triggerCalculateEvent();
        return area;
    }

    /**
     * Функция расчета периметра равностороннего треугольника
     * @returns {number}   
     */
    calculatePerimeter(): number {
        const perimeter = 3 * this.side;
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