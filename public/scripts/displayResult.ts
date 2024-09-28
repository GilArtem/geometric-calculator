/**
 * Отображает результат вычислений на веб-странице
 * 
 * Находит контейнер для отображения результата из функции calculateFigure() и обновляет его содержимое
 * 
 *  @param resultObj - Объект, содержащий результат вычислений
 * 
 * @returns {void} - Функция ничего не возвращает
 */
export function displayResult(resultObj: {result: number}): void {
    const resultContainer = document.getElementById('resultContainer');
    if (resultContainer) {
        const result = Number((resultObj.result).toFixed(2)); 
        resultContainer.innerHTML = `<h2>Результат: </h2><p>${result}</p>`; 
    }
}