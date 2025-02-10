export interface column<T> {
  label: string
  key: keyof T | "actions"
  sort?: boolean
  minWidth?: number
}

export interface Employee {
  personalNo: string
  name: string
  email: string
  department: string
  subDepartment: string
}

export interface TableCompProp {
  refNo: string
  subject: string
  sender: string
  receiver: string
  dateOfLetter: string
  dateSent: string
  serialNo: string
  status: string
}
