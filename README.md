# Employee Payroll Frontend
---

This is the frontend for the Employee Payroll application, built using Angular. The frontend provides a user interface for managing employee records, including operations like creating, retrieving, updating, and deleting employee details.

## Features

- Add new employee records
- Retrieve all employee records
- Update existing employee records
- Delete employee records
- Search for employees by name, ID, or department
- User-friendly interface with a modern design

## Technologies Used

- Angular
- TypeScript
- HTML
- SCSS
- Bootstrap

## Getting Started

### Prerequisites

- Node.js
- Angular CLI

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/employee-payroll-frontend.git
    cd employee-payroll-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

### API Integration

The frontend communicates with the backend through HTTP requests. Ensure that the backend server is running and accessible.

### API Endpoints

- **Get all employees**:
    ```
    GET http://localhost:8080/employeepayrollservice/
    ```
    Retrieves a list of all employees.

- **Create a new employee**:
    ```
    POST http://localhost:8080/employeepayrollservice/create
    ```
    Creates a new employee. Request body should be in JSON format.

- **Update an employee**:
    ```
    PUT http://localhost:8080/employeepayrollservice/update/{id}
    ```
    Updates an existing employee by ID. Request body should be in JSON format.

- **Delete an employee**:
    ```
    DELETE http://localhost:8080/employeepayrollservice/delete/{id}
    ```
    Deletes an employee by ID.

### Example JSON for Creating/Updating an Employee

```json
{
    "name": "John Doe",
    "gender": "Male",
    "department": ["HR"],
    "salary": 50000,
    "day": 10,
    "month": "January",
    "year": 2023,
    "profileImage": "../assets/user1.png",
    "note": "Sample note"
}
```


## Contributing

We welcome contributions to improve this project. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Submit a pull request with a description of your changes.
---