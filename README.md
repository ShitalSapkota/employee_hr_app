# HR Management App

This is a learning project to practice React while building a simple HR management app. Each week, you’ll follow steps to add new features and learn new React concepts. By the end, you’ll have a complete app that looks and works like a small HR tool.

## Features

- **Employee Directory:** View and manage employees dynamically.
- **Role Management:** Promote or demote employees with visual feedback.
- **Login Functionality:** Uses client-side conditional rendering (no real authentication) to control access to the employee list.
- **Form Handling:** Add and edit employee details dynamically.
- **Routing:** Seamlessly navigate between application pages.
- **API Integration:** Fetch, update, and manage employee data using a mock backend.
- **Optimization:** Modular styling, reusable hooks, and clean architecture.

## Branch Structure
- **Main Branch:** Contains the final version of the project with all features implemented.
- **Week Branches:** Each week’s branch (e.g., week-1, week-2, etc.) contains the solution for the tasks of that specific week. You can use these branches to follow along or compare your progress.

## Weekly Steps

### Week 1: Get started
- Set up a React project using Vite.
- Build two components: `EmployeeCard` and `EmployeeList`.
- Pass employee details as props and use them in the cards.
- Add a button to promote/demote employees and update their role using state.
- Write a simple README and push your code to GitHub.

### Week 2: Add more features
- Create an array of employees with details like name, role, and start date.
- Show this employee list in your app.
- Add a "Log In" button to toggle between seeing the employee list or a login message.
- Display years worked and show reminders for anniversaries or probation reviews.
- Update the app to handle special cases like new hires and long-term employees.

### Week 3: Clean up and add interactivity
- Use props destructuring to make your code cleaner.
- Create a `Button` component and use it everywhere you need buttons.
- Add an "Edit" button to allow changes to roles, departments, and locations.
- Update styling dynamically based on the department.
- Clean up your code and test all features before pushing to GitHub.

### Week 4: Add routing
- Install React Router and create pages for the app: Login, List, and Form.
- Set up routes so users can navigate between these pages.
- Build a form to add new employees and manage its input with state.
- Add a login page with basic username/password functionality.

### Week 5: Connect to a backend
- Use `json-server` to create a mock backend and store employee data in `db.json`.
- Fetch the employee list from the backend instead of using a static array.
- Add functionality to create, edit, and fetch employee data dynamically.
- Add a detailed view page for each employee.

### Week 5: Polish your app
- Use custom hooks to simplify and reuse logic.
- Implement CSS Modules for better styling and scope management.
- Replace inline styles with CSS variables for consistent theming.
- Refactor the file structure to keep everything organized.
- Test the app and ensure all features work smoothly.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.