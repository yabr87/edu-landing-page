# Edu Stream landing page

https://darling-torrone-a8b373.netlify.app

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

```html
<body>
  <load ="partials/header.html" />
</body>
```

- Імпортуйте картинки в паршалі відносно основного html файла в не залежності
  від того де знаходиться сам паршал

```html
<img src="./img/logo.svg" alt="logo" />
```

- Скрипти та стилі підключаються до основного html файла

# Як прив'язати гугл таблицю

https://www.youtube.com/watch?v=3wg4SazgGPs

https://github.com/jamiewilson/form-to-google-sheets
