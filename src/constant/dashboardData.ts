import { ReactComponent as File1 } from "@/assets/File1.svg"
import { ReactComponent as File2 } from "@/assets/File2.svg"

import { ReactComponent as Staff1 } from "@/assets/Staff1.svg"
import { ReactComponent as Staff2 } from "@/assets/Staff2.svg"

import { ReactComponent as City1 } from "@/assets/City1.svg"
import { ReactComponent as City2 } from "@/assets/City2.svg"

export const CARDDATA = [
  {
    mainIcon: File2,
    title: "Total Memos",
    total: "12,345",
    subtitle: "Total memos currently",
    bgIcon: File1,
  },
  {
    mainIcon: Staff2,
    title: "Total Staffs",
    total: "589",
    subtitle: "Total staffs currently",
    bgIcon: Staff1,
  },
  {
    mainIcon: City2,
    title: "Total Companies",
    total: "7",
    subtitle: "Total companies currently",
    bgIcon: City1,
  },
]

export const adminColumns = [
  {
    label: "Ref. No.",
    key: "data",
    sort: true,
    minWidth: 100,
  },
  {
    label: "Subject",
    key: "subject",
    minWidth: 150,
  },
  {
    label: "Sender",
    key: "sender",
    minWidth: 150,
  },
  {
    label: "Receiver",
    key: "receiver",
    minWidth: 150,
  },
  {
    label: "Date of letter",
    key: "dol",
    minWidth: 150,
  },
  {
    label: "Date sent",
    key: "sent",
    minWidth: 150,
  },
  {
    label: "Serial No.",
    key: "serial",
    minWidth: 150,
  },
  {
    label: "Status",
    key: "status",
    minWidth: 150,
  },
  {
    label: "Actions",
    key: "actions",
    minWidth: 150,
  },
]

export const result = [
  {
    refNo: "HQ/AGM/1234",
    subject: "Request for printer.",
    sender: "AGM ICT",
    receiver: "GM ICT",
    dateOfLetter: "11/01/2025 (2:05pm)",
    dateSent: "11/01/2025 (2:05pm)",
    serialNo: "011",
    status: "Read",
  },
  {
    refNo: "HQ/AGM/1234",
    subject: "Request for printer.",
    sender: "AGM HR",
    receiver: "GM ICT",
    dateOfLetter: "11/01/2025 (2:05pm)",
    dateSent: "11/01/2025 (2:05pm)",
    serialNo: "011",
    status: "Unread",
  },
  {
    refNo: "HQ/AGM/1234",
    subject: "Request for printer.",
    sender: "AGM Finance",
    receiver: "GM ICT",
    dateOfLetter: "11/01/2025 (2:05pm)",
    dateSent: "11/01/2025 (2:05pm)",
    serialNo: "011",
    status: "Read",
  },
  {
    refNo: "HQ/AGM/1234",
    subject: "Request for printer.",
    sender: "AGM Procurement",
    receiver: "GM ICT",
    dateOfLetter: "11/01/2025 (2:05pm)",
    dateSent: "11/01/2025 (2:05pm)",
    serialNo: "011",
    status: "Read",
  },
  {
    refNo: "HQ/AGM/1234",
    subject: "Request for printer.",
    sender: "AGM ICT",
    receiver: "GM ICT",
    dateOfLetter: "11/01/2025 (2:05pm)",
    dateSent: "11/01/2025 (2:05pm)",
    serialNo: "011",
    status: "Unread",
  },
  {
    refNo: "HQ/AGM/1234",
    subject: "Request for printer.",
    sender: "AGM ICT",
    receiver: "GM ICT",
    dateOfLetter: "11/01/2025 (2:05pm)",
    dateSent: "11/01/2025 (2:05pm)",
    serialNo: "011",
    status: "Read",
  },
]
