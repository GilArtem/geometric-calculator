/**  Абстрактный класс-родитель: Фигура */
export abstract class Figure extends EventTarget{
    /** Валидация поступающих от пользователя данных*/ 
    protected validationArgs(...args: number[]): void {
        args.forEach(arg => {
            if (arg <= 0) throw new Error('Аргумент не может быть меньше или равняться нулю!')
        });
    }
    /** Абстрактный метод вычисления площади */
    abstract calculateArea(): number;
    /** Абстрактный метод вычисления периметра */
    abstract calculatePerimeter(): number;

    /**
     * Абстрактный метод выполняющий заданную операцию для фигуры
     * 
     * @param operationType - Тип операции для последующих вычислений 
     * @returns {number} Возвращает результат вычисления в виде числа
     */
    abstract makeOperation(operationType: string): number; 

    /**
     * Метод инициирует событие calculationComplete 
     * для передачи информацию о завершении вычисления 
     * другим частям программы, подписанных на это событие
     * Служит для вывода результатов вычислений
     */
    triggerCalculateEvent(): void {
        const event = new Event('calculationComplete');
        this.dispatchEvent(event);
    }

};