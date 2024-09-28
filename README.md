# Калькулятор Геометрических Форм

Это веб-приложение, созданное с использованием TypeScript, Express.js и Handlebars. Приложение позволяет пользователям вычислять параметры различных геометрических фигур. Пользователь может вводить размеры, выбирать тип операции и получать рассчитанные результаты.

## Возможности

- **Динамическое отображение форм**: Загрузка форм для различных фигур отображается динамически из шаблонов Handlebars.
- **Геометрические вычисления**: Вычисление параметров для поддерживаемых фигур.
- **Клиент-серверная архитектура**: Приложение отправляет данные формы на сервер, где выполняются вычисления, а результаты возвращаются на клиент.
- **Валидация данных**: Проверка корректности вводимых значений (например, недопустимы отрицательные и равные нулю значения).


## Ключевые файлы:
- *src/controllers/*: Содержит классы контроллеров для каждой фигуры. Каждый контроллер обрабатывает данные формы и выполняет соответствующие вычисления.
- *src/models/*: Содержит модели фигур, включающие методы для вычисления параметров.
- *src/server.ts*: Основной серверный скрипт приложения.
- *public/scripts/*: Содержит клиентскую логику:
  - отправку формы; 
  - отображение результата;
  - загрузку шаблонов;
- *public/templates/*: Шаблоны для динамической загрузки форм.
- *public/index.html*: Главный HTML файл. 

## Установка

### Требования
Node.js (версии 14.x и выше)
npm или yarn

### Настройка
Клонируйте этот репозиторий:

```git clone https://github.com/ваш-логин/geometric-calculator.git```
```cd geometric-calculator```

### Установите необходимые зависимости:

```npm install```

### Скомпилируйте TypeScript файлы:

```npm run build```

### Запустите приложение:

```npm start```

Теперь приложение должно быть доступно по адресу http://localhost:3000.

## Используемые технологии
- TypeScript
- Express
- Handlebars


