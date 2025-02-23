# Employee HR Management App

This is a learning project to practice React while building a simple HR management app. Each week, new features were added, and React concepts were learned. By the end, a complete app was created that looks and works like a small HR tool.

## Features
- Employee Directory: View and manage employees dynamically.

- Role Management: Promote or demote employees with visual feedback.

- Login Functionality: Uses client-side conditional rendering (no real authentication) to control access to the employee list.

- Form Handling: Add and edit employee details dynamically.

- Routing: Seamlessly navigate between application pages.

- API Integration: Fetch, update, and manage employee data using a mock backend.

- Optimization: Modular styling, reusable hooks, and clean architecture.

## Branch Structure
Main Branch: Contains the final version of the project with all features implemented.

- Week Branches: Each week’s branch (e.g., week1, week2, etc.) contains the solution for the tasks of that specific week. You can use these branches to follow along or compare your progress.

### Weekly Steps Summary
  #### Week 1: Completed Setup
  
1. React project was set up using Vite.

2. Built EmployeeCard and EmployeeList components.

3. Passed employee details as props and used them in the cards.

4. Added a button to promote/demote employees and update their role using state.

5. Created a simple README and pushed the code to GitHub.

  #### Week 2: Added Features
  
1. Created an array of employees with details like name, role, and start date.

2. Displayed the employee list in the app.

3. Added a "Log In" button to toggle between seeing the employee list or a login message.

4. Displayed years worked and showed reminders for anniversaries or probation reviews.

5. Updated the app to handle special cases like new hires and long-term employees.

  #### Week 3: Cleaned Up and Added Interactivity
  
1. Used props destructuring to make the code cleaner.

2. Created a Button component and used it everywhere buttons were needed.

3. Added an "Edit" button to allow changes to roles, departments, and locations.

4. Updated styling dynamically based on the department.

5. Cleaned up the code and tested all features before pushing to GitHub.

  #### Week 4: Added Routing
  
1. Installed React Router and created pages for the app: Login, List, and Form.

2. Set up routes for users to navigate between these pages.

3. Built a form to add new employees and managed its input with state.

4. Added a login page with basic username/password functionality.

  #### Week 5: Connected to a Backend
  
1. Used json-server to create a mock backend and stored employee data in db.json.

2. Fetched the employee list from the backend instead of using a static array.

3. Added functionality to create, edit, and fetch employee data dynamically.

4. Added a detailed view page for each employee.

#### Week 6: Polished the App

1. Used custom hooks to simplify and reuse logic.

2. Implemented CSS Modules for better styling and scope management.

3. Replaced inline styles with CSS variables for consistent theming.

4. Refactored the file structure to keep everything organized.

5. Tested the app and ensured all features worked smoothly.


## Note: This is the final assignment for React Basics and some of the logic and CSS styling were copied or taken from Reference code. 
[https://github.com/margittennosaar/hr-app]  (Margit Tennosaar)