import { Figure } from './Figure.js';

/**  Класс: Прямоугольник */
export class Rectangle extends Figure {
    /**
     * Конструктор класса
     * @param width - Ширина прямоугольника
     * @param height - Высота прямоугольника
     */
    constructor (private width: number, private height: number){
        super();
        this.validationArgs(this.width, this.height);
    }

    /**
     * Функция расчета площади прямоугольника
     * @returns {number}   
     */
    calculateArea(): number {
        const area = this.width * this.height;
        this.triggerCalculateEvent();
        return area;
    }  

    /**
     * Функция расчета периметра прямоугольника
     * @returns {number}   
     */
    calculatePerimeter(): number {
        const perimeter = 2 * (this.width + this.height);
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