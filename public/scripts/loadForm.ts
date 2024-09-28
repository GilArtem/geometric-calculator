import { calculateFigure } from "./calculateFigure.js";
import { displayResult } from "./displayResult.js";

/**
 * Загружает форму выбранной геометрической фигуры и обрабатывает её отправку
 * @param figure - Название фигуры 
 */
export async function loadForm(figure: string) {
    const formContainer: HTMLElement | null = document.getElementById('formContainer');
    const errorMessage = document.getElementById('errorMessage');
    const resultContainer = document.getElementById('resultContainer');

    if(resultContainer) resultContainer.innerText = '';
    if (errorMessage) errorMessage.innerText = '';
    if (formContainer) {
        formContainer.innerHTML = ''; // Очищаем контейнер перед загрузкой формы

        const response = await fetch(`/templates/${figure}.hbs`); // Запрашивает шаблон фигуры
        const template: string = await response.text();

        formContainer.innerHTML = template; 

        // Добавляем обработчик события для отправки формы
        const form = formContainer.querySelector('form');
        form?.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const formData = new FormData(form); // Собираем данные формы
            const data = Object.fromEntries(formData);  // Преобразуем данные формы в объект

            const result = await calculateFigure(figure, data);

            displayResult(result);
        });
    }
}