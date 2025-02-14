export interface column<T> {
  label: string
  key: keyof T | "actions"
  sort?: boolean
  minWidth?: number
}

type CompanyStatus = "Active" | "Inactive"

export interface Company {
  companyId: string
  companyName: string
  contactPerson: string
  email: string
  phone: string
  address: string
  status: CompanyStatus
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
