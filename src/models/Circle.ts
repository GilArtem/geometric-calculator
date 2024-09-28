import { Figure } from "./Figure.js";

/**  Класс: Круг */
export class Circle extends Figure {
    /**
     * Конструктор класса
     * @param radius - Радиус круга
     */
    constructor(private radius: number){
        super();
        this.validationArgs(this.radius);
    }

    /**
     * Функция расчета площади круга
     * @returns {number}   
     */
    calculateArea(): number {
        const area = Math.PI * Math.pow(this.radius, 2);
        this.triggerCalculateEvent();
        return area;
    }

    /**
     * Функция расчета периметра круга
     * @returns {number}   
     */
    calculatePerimeter(): number {
        const perimeter = 2 * Math.PI * this.radius;
        this.triggerCalculateEvent();
        return perimeter;
    }

    /**
     * Функция расчета периметра круга
     * @returns {number}   
     */
    calculateDiameter(): number {
        const diameter = 2 * this.radius;
        this.triggerCalculateEvent();
        return diameter;  
    }

    makeOperation(operationType: string): number {
        /** Объект, в котором:
         * ключи - типы операций в виде строки,
         * значения — соответствующие методы класса
         */
        const operations: { [key: string]: () => number } = {
            area: this.calculateArea,
            perimeter: this.calculatePerimeter,
            diameter: this.calculateDiameter
        };

        return operations[operationType]?.call(this);
    }
}