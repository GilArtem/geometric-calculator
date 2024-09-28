/**
 * Выполняет вычисления для заданной фигуры на сервере.
 *
 * Отправляет данные о фигуре на сервер, а затем возвращает результат вычислений в формате JSON.
 * 
 * @param figure - Тип фигуры для вычислений
 * @param data - Данные для вычислений
 * 
 * @returns Promise, который разрешается в объект результата, полученного от сервера
 */
export async function calculateFigure(figure: string, data: {}): Promise<{result: number}> {
    try{
        const resultContainer = document.getElementById('resultContainer');
        const errorMessage = document.getElementById('errorMessage');
        const response = await fetch(`/calculate/${figure}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (resultContainer) resultContainer.innerHTML = '';
        if (errorMessage) errorMessage.innerText = '';
        if (!response.ok) {
            const errorData = await response.json();
            if (errorMessage) {
                errorMessage.innerText = errorData.message;
            }
            throw new Error(errorData.message);
        }

        return await response.json() 
    } catch(err) {
        console.error("Ошибка:", err);
        throw err;
    }
}
