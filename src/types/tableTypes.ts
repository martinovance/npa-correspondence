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

export interface adminColumn {
  label: string
  key: string
  sort?: boolean
  minWidth?: number
}
