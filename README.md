# React + TypeScript + Vite

# 🚀 DevStack - Technology Stack Builder

DevStack is a modern and responsive web application that help users explore popular web development technologies and build their own presonalized technology stack. Users can view technology details, add technologies to their stack, and manage their selected items easily.

## 🌐 Live Demo

🔗 [Live Site](https://dev-stack-6gcb7k4sg-md-nur-uddins-projects.vercel.app/)

## 📂 Github Repository

🔗[Github Repository](https://github.com/nuruddin538/DevStack.git)

## ✨Features

- 🔍**Explore Technologies:** Browse technologies cards with names, descriptions, categories, rating, and difficulty levels.
- 🧰 **Build Your Stack** Add technologies to a personal stack and view all selected technologies in one place.
- ➕ **Stack Management:** Prevent duplicate selections, remove individual technologies, or clear the entire stack.
- 📱 **Responsive Design:** Enjoy a clean and user-friendly interface on mobile, tablet, and desktop divices.
- 🔔 **Toast Notifications:** Get instant feedback when adding, removing, or managing technologies.

## 🛠️ Technologies Used

- ⚛️ React.js
- 📘 Typescript
- 🎨 Tailwind CSS
- ⚡ Vite
- 📦 React-Toastify
- 📄 JSON
- 🧩 JavaScript (ES6+)

## 📸 Project Preview

<!-- Add your project screenshot here -->

## ![DevStack Preview](./src/assets/preview.png)

# 🧠 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-Like code inside Javascript or look. It makes components easier to read and write.React uses JSX to describe how the user interface should look. It makes components easier to read and write.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. they are read-only.

**State** is data manage inside a component that can change over time and cause the component to re-render.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets us create and manage state in a functional component.

In this project, I used it to manage the selected technologies in the **Your Stack** section. I also used it to manage loading and technology data.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects in a React component, such as fetching data or updating the document.

I used it to fetch technology data from the local JSON file when the component loads. This allows the application to load the data dynamically instead of hardcoding it inside the component.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. it allows React to understand which items were added, removed, or updated, so it can updated the UI efficiently.\

## 6. What is conditional rendering? Show one placed you used it.

Conditional rendering means displaying different UI elements based on a condition.
In this project, I used it in the **Your Stack** section:

````tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty. Add technologies to get started!</p>
) : (selectedTechnologies.map((technology) => (
  <StackItem key={technology.id} technology={technology}></StackItem>
)))}



<!-- This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
````

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories. -->
