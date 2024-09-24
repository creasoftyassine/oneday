# README

## Introduction

This project was developed as part of a pre-employment test. It is a TODO management application built with **React**, **Apollo Client** for integration with a **GraphQL** API, and **Emotion** for managing styles via `CSS-in-JS`. The application allows users to add, view, filter, and update TODOs, while providing a clean and modular architecture.

## Architecture

The architecture of this project is designed to separate responsibilities while promoting the reusability of components and data logic. Here’s an overview of the key elements:

### 1. Components
The components are divided into two main categories:
- **Page components**: They handle the main logic for each page (e.g., `TodoListPage`, `TodoDetailPage`).
- **Atomic components**: Small functional and reusable units like `TodoItem`, `Filters`, and `TodoDetail`.

Styles are centralized into separate **containers** using Emotion. This keeps component files lightweight while simplifying global style management.

### 2. Custom hooks
The project uses several custom hooks, including:
- **useTodos**: Fetches the list of TODOs based on applied filters.
- **useTodo**: Fetches a specific TODO for the details page.
- **useUpdateTodo**: Manages the GraphQL mutation to update the status of a TODO.

These hooks are used in components to decouple data fetching logic from visual components.

### 3. Context management
The application uses **React Context** to manage the global state of filters (e.g., TODO types, completion status, sorting order). This enables centralized filter management and avoids unnecessary state lifting between components.

The context is implemented in the `TodoContext.js` file, which exposes both the values and the actions that modify these values via `setFilters`.

### 4. Apollo cache management after an update
When a TODO is updated (via the button that changes its status), Apollo’s cache is automatically updated. This is handled by the `useUpdateTodo` mutation. Apollo updates the local cache using the `update` function, where we replace the old TODO in the list with the new one, ensuring the UI remains in sync with the server without additional queries.

### 5. Global theme and styles
The application uses **Emotion** for managing styles through `CSS-in-JS` ([Official Emotion documentation](https://emotion.sh/docs/introduction)). This allows for the creation of dynamically styled components, with reusable themes and styles throughout the application.

We’ve implemented a **global theme** that is accessible to all components. This theme defines specific colors for different states like "alert", "valid", and "disabled". Each styled component, such as `Button`, uses flags to adjust its appearance based on these states, ensuring visual consistency across the entire application.

Additionally, we’ve developed **reusable styled containers** that can be shared and used in multiple components. These containers are located in the `styles/containers` folder and facilitate the management of global styles.

### 6. Unit Tests

The project includes unit tests located in the `__tests__` folder and uses **Jest** as the testing framework. Four main tests have been set up to illustrate how to test certain parts of the application:

- **App.test.js**: Tests the main application functionality.
- **TodoDetail.test.js**: Tests the display and behavior of the TODO detail component.
- **TodoList.test.js**: Ensures that the TODO list displays correctly with filters.
- **TodoListPage.test.js**: Verifies the overall logic and display of the TODO list page.

These tests serve as examples and cover only a small portion of possible test scenarios. Additional tests can be added to improve coverage and ensure the stability of the application on a larger scale.

## Update Process

### 1. Components
To add or modify components:
1. Create a file in the `components/` directory for the new component.
2. Import styles from `styles/containers` to maintain consistency across the application.
3. Use custom hooks or context data if needed to handle data cleanly.

### 2. Custom hooks
Hooks are located in the `hooks/` directory. Each hook is independent and can be tested separately. To add a new one, create a file following the convention `useHookName.js`.

### 3. Context management
To add new elements to the context:
1. Modify the initial values in `TodoContext.js`.
2. Add corresponding actions to update these values with `setFilters` or other setters.

### 4. Apollo cache management
If a new mutation is added, make sure to configure the `update` option in Apollo Client to maintain consistency between local and server data.

## Running the Project

The application requires Node.js version 18 for proper execution. To avoid relying on a local setup, the project can be run in a Docker container.

### 1. Local Environment
#### a. Install dependencies
```bash
npm install
```

#### b. Start the project in development mode
```bash
npm start
```

#### c. Run tests
```bash
npm test
```

### 2. Docker Environment
#### Build and run the services
In your project root directory, run the following command:

```bash
docker-compose up --build
```
This will build the image and start the container for the application. To run the tests, you can execute:

```bash
docker-compose run test
```

#### Using arguments
The API URL (provided for the technical test) is defined as an environment variable in the `.env` file, which can be edited if necessary. You can also pass it as an argument when running the application by using the following command:

```bash
REACT_APP_API_URL=http://localhost:4000 docker-compose up
```

### 3. Access the application
You should be able to access the application at `http://localhost:3000`.

---

This project is designed to be maintainable, scalable, and easily extensible with a clear and modular architecture.