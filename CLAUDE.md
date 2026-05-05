# DLSL Smart Library — LRC System

## After every change

Always end your response with a commit message in this format:

```
<type>: <short description>
```

Types: `feat` (new feature), `fix` (bug fix), `style` (UI/CSS only), `refactor` (restructuring), `docs` (documentation).

Keep it one line, lowercase, no period at the end.

## Project

Pure HTML/CSS/JS single-page app. No framework, no build tools.

## File structure

```
index.html          — HTML only, no inline CSS or JS
css/
  tokens.css        — design tokens and CSS variables
  layout.css        — topnav, sidebar, app shell, responsive
  components.css    — shared UI: buttons, cards, tables, book cards
  pages/            — one file per page
js/
  app.js            — navigate() function, must load first
  roles.js          — role switching (student vs librarian)
  interactions.js   — filters, calendar, chatbot quick replies
```

## Role system

Two roles: `student` and `librarian`. Role-specific content uses `data-role` on `.role-view` and `.sidebar-view` elements, toggled by `roles.js`.

Pages that are role-aware: dashboard, sidebar, notifications, reservations.
