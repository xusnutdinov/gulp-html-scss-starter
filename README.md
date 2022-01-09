# Стартовый шаблон для верстки (Gulp, HTML, SCSS)

## Установка

- Установить [Node.js](https://nodejs.org/en/) актуальной версии
- Скачать сборку
- Установить gulp глобально <code>npm i -g gulp</code>
- Перейти в папку со сборкой
- Установить все необходимые зависимости <code>npm i</code>
- Для **работы в режиме разработчика** использовать команду `npm run dev`
- Для **сборки проекта** для продакшн использовать команду `npm run prod`

## Структура файлов

```
Project
├─ build
├─ gulp
├─ src
│ ├─ templates
│ ├─ scss
│ ├─ js
│ ├─ fonts
│ ├─ img
│ ├─ svg
│ └─ misc
├─ .babalrc
├─ .editorconfig
├─ .gitattributes
├─ .gitignore
├─ .stylelintrc
├─ gulpfile.js
├─ package.json
└─ package-lock.json
```

- Корень папки

  - `.babelrc` - Настройки Babel
  - `.editorconfig` - Настройки для редактора кода
  - `.gitattributes` - Настройки атрибутов Гит
  - `.gitignore` - Запрет на отслеживание файлов Гитом
  - `.stylelintrc` - Настройки Stylelint
  - `gulpfile.js` - Настройки Gulp
  - `package.json` - Список зависимостей

- Папка `src`

  - `src/templates` - HTML-файлы
  - `src/scss` - SCSS-файлы
  - `src/js` - JS-файлы
  - `src/fonts` - Шрифты
  - `src/img` - Изображения
  - `src/svg` - svg которые попадут в svg спрайт
  - `src/misc` - Различные файлы (фавиконки, php-скрипты и т.д.)

- Папка `build` - папка в которую попадают в результате работы сборщика **gulp**

- Папка `gulp` - папка с тасками gulp

## Команды

- `npm run dev` - Запуск для разработки
- `npm run prod` - Полная сборка проекта
- `npm run prod:html` - Собрать HTML-файлы
- `npm run prod:styles` - Скомпилировать файлы SCSS
- `npm run prod:scripts` - Скомпилировать файлы JS
- `npm run prod:fonts` - Собарть шрифты
- `npm run prod:images` - Собрать изображения
- `npm run prod:svg` - Собрать svg спрайт
- `npm run prod:misc` - Собрать файлы из misc
- `lint:styles` - Проверить файлы SCSS на наличие ошибок. Для работы необходим плагин Stylelint
- `lint:styles --fix` - Исправить ошибки в файлах SCSS
