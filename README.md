# Edu Stream landing page

https://edu-streams.org/

Встановіть пакети `npm install`  
Для початку розробки `npm start` та перейдіть за посиланням в консолі наприклад:
`http://localhost:5173/`

<br/>

# Build

Build command `npm run build` and publish directory `dist`

<br/>

# Partials

_Використовуються для зручності розробки і розбиття html сторінки на частинки._

Використання паршалу:

- створіть html документ без `<!DOCTYPE>` та `<head>` частини та працюйте яз із
  звичайним html.
- Імпортуйте ваш паршал на на потрібну вам сторінку наприклад `index.html`

```jsx
<body>
  <load ="partials/header.html" />
</body>
```

- Імпортуйте картинки в паршалі відносно основного html файлу в не залежності
  від того де знаходиться сам паршал

```html
<img src="./img/logo.svg" alt="logo" />
```

- Скрипти та стилі підключаються до основного html файлу

# Як додати новий віджет

- зроби копію будь якого віджету в папку partials
- перейменуй всі файли на назву нового віджету наприклад: feedback на questions
- заміни за допомогою 'пошуку та заміни' `crl + H` всі слова в кожному файлі з
  старої назви на нову наприклад: feedback на questions
- збережи в папці `img` банер з назвою віджету `назва-віджету.jpg`
- якщо банер повинен бути з права додай клас `widget-right` в div з класом
  `widget-info`
- заміни опис віджету та посилання на відео.
- імпортуй в `index.js` файл `назва-віджету.js`
  ```js
  import './partials/questions/questions';
  ```
- імпортуй в `index.html` паршал з віджетом

  ```jsx
  <main>
    <load ="partials/feedback/feedback.html" />
    <load ="partials/questions/questions.html" />
  </main>
  ```

# Як прив'язати гугл таблицю

https://docs.google.com/spreadsheets/d/1apcaH0WDw7Ymd5rLXl_wjvcDAiO5TIlrKYjXOzzxn4U/edit#gid=0

https://www.youtube.com/watch?v=3wg4SazgGPs

https://github.com/jamiewilson/form-to-google-sheets
