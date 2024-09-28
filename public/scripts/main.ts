import { loadForm } from "./loadForm.js";

/**
 * Обработчики событий для кнопок выбора геометрических фигур
 * после полной загрузки содержимого документа.
 */
document.addEventListener('DOMContentLoaded', () => {
    const triangleButton = document.getElementById('triangleButton') as HTMLButtonElement;
    const rectangleButton = document.getElementById('rectangleButton') as HTMLButtonElement;
    const equilateralTriangleButton = document.getElementById('equilateralTriangleButton') as HTMLButtonElement;
    const circleButton = document.getElementById('circleButton') as HTMLButtonElement;
    const squareButton = document.getElementById('squareButton') as HTMLButtonElement;

    // Обработчики событий для кнопок
    triangleButton?.addEventListener('click', () => loadForm('triangle'));
    rectangleButton?.addEventListener('click', () => loadForm('rectangle'));
    equilateralTriangleButton?.addEventListener('click', () => loadForm('equilateralTriangle'));
    circleButton?.addEventListener('click', () => loadForm('circle'));
    squareButton?.addEventListener('click', () => loadForm('square'));
});

