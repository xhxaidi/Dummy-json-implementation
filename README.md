# User Management Web Application

## Project Description
This project is a web application that displays a table of 30 users retrieved from a dummy JSON API. It includes features to view, add, update, and delete user data dynamically. The application interacts with the backend API using HTTP methods (`GET`, `POST`, `PUT`, and `DELETE`) to manage user data.

---

## Features

1. **View Users**:
   - Displays a table with user data (e.g., name, email, etc.).
   - Each row has a "Know More" button that dynamically generates a user-specific detail page.

2. **Add New User**:
   - An "Add User" button opens a new page for creating a new user.
   - The new user's data is sent to the server via a `POST` request.

3. **Update User**:
   - Each user row has an "Update" button.
   - Clicking it opens a floating window to edit the user's data.
   - Sends a `PUT` request to update the user on the server and reflects the changes in the table.

4. **Delete User**:
   - Each user row includes a "Delete" button.
   - Sends a `DELETE` request to the server and removes the user from the table.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **API**: Dummy JSON API
- **Backend Communication**: HTTP methods (`GET`, `POST`, `PUT`, `DELETE`)
