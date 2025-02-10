import { column, Employee } from "@/types/tableTypes"

export const ManageStaffColumns: column<Employee>[] = [
  {
    label: "Personal No.",
    key: "personalNo",
    sort: true,
    minWidth: 100,
  },
  {
    label: "Name",
    key: "name",
    minWidth: 150,
  },
  {
    label: "Email",
    key: "email",
    minWidth: 150,
  },
  {
    label: "Department",
    key: "department",
    minWidth: 150,
  },
  {
    label: "Sub-department",
    key: "subDepartment",
    minWidth: 150,
  },
  {
    label: "Actions",
    key: "actions",
    minWidth: 150,
  },
]

export const EmployeeData: Employee[] = [
  {
    personalNo: "32451",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Hardware",
  },
  {
    personalNo: "23245",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Software",
  },
  {
    personalNo: "32452",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Training",
  },
  {
    personalNo: "12345",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Research & Special Projects",
  },
  {
    personalNo: "65657",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Research & Special Projects",
  },
  {
    personalNo: "34464",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Hardware",
  },
  {
    personalNo: "35576",
    name: "Lorem Ipsum",
    email: "loremipsum@gmail.com",
    department: "ICT",
    subDepartment: "Software",
  },
]
