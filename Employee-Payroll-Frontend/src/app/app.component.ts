import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id?: number;
  name?: string;
  gender?: string;
  department?: string[];
  salary?: number;
  day?: number;
  month?: string;
  year?: number;
  profilePic?: string;
  startDate?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title = 'Employee Payroll';
  employees: Employee[] = [
    {
      id: 1,
      name: 'Alice Smith',
      gender: 'Female',
      department: ['HR'],
      salary: 50000,
      day: 10,
      month: 'January',
      year: 2023,
      profilePic: '../assets/user2.png',
      startDate: '10 January 2023',
    },
    {
      id: 2,
      name: 'Bob Johnson',
      gender: 'Male',
      department: ['IT', 'Finance'],
      salary: 60000,
      day: 15,
      month: 'February',
      year: 2023,
      profilePic: '../assets/user1.png',
      startDate: '15 February 2023',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      gender: 'Male',
      department: ['Marketing', 'Sales'],
      salary: 70000,
      day: 5,
      month: 'March',
      year: 2022,
      profilePic: '../assets/user2.png',
      startDate: '5 March 2022',
    },
  ];

  searchText: string = '';
  showSearch: boolean = false;

  newEmployee: Employee = {
    name: '',
    gender: '',
    department: [],
    salary: undefined,
    day: undefined,
    month: '',
    year: undefined,
    profilePic: '',
    startDate: '',
  };
  editMode: boolean = false;
  employeeToEdit: Employee | null = null;
  showForm: boolean = false;

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = Array.from({ length: 50 }, (_, i) => i + 1970);

  constructor() {
    console.log(this.employees);
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  addEmployee() {
    this.newEmployee = {
      name: '',
      gender: '',
      department: [],
      salary: undefined,
      day: undefined,
      month: '',
      year: undefined,
      profilePic: '',
      startDate: '',
    };
    this.editMode = false;
    this.showForm = true;
  }

  editEmployee(employee: Employee) {
    this.employeeToEdit = employee;
    this.newEmployee = { ...employee };
    this.editMode = true;
    this.showForm = true;
  }

  updateDepartments(dept: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.newEmployee.department?.push(dept);
    } else {
      this.newEmployee.department = this.newEmployee.department?.filter(
        (d) => d !== dept
      );
    }
  }

  saveEmployee() {
    // Validate form fields
    if (
      !this.newEmployee.name ||
      !this.newEmployee.gender ||
      this.newEmployee.department?.length === 0 ||
      !this.newEmployee.salary ||
      !this.newEmployee.day ||
      !this.newEmployee.month ||
      !this.newEmployee.year ||
      !this.newEmployee.profilePic
    ) {
      alert('Please fill in all the fields.');
      return;
    }

    this.newEmployee.startDate = `${this.newEmployee.day} ${this.newEmployee.month} ${this.newEmployee.year}`;

    if (this.editMode && this.employeeToEdit) {
      const index = this.employees.findIndex((e) => e === this.employeeToEdit);
      if (index !== -1) {
        this.employees[index] = { ...this.newEmployee };
      }
    } else {
      this.newEmployee.id =
        this.employees.length > 0
          ? Math.max(...this.employees.map((e) => e.id || 0)) + 1
          : 1;
      this.employees.push({ ...this.newEmployee });
    }
    this.resetForm();
  }

  resetForm() {
    this.newEmployee = {
      name: '',
      gender: '',
      department: [],
      salary: undefined,
      day: undefined,
      month: '',
      year: undefined,
      profilePic: '',
      startDate: '',
    };
    this.editMode = false;
    this.showForm = false;
    this.employeeToEdit = null;
  }

  deleteEmployee(id: number | undefined) {
    if (id === undefined) return;
    this.employees = this.employees.filter((e) => e.id !== id);
  }

  searchEmployees() {
    const search = this.searchText.toLowerCase();
    return this.employees.filter(
      (employee) =>
        employee.name?.toLowerCase().includes(search) ||
        employee.id?.toString().includes(search) ||
        employee.department?.some((dept) => dept.toLowerCase().includes(search))
    );
  }
}
