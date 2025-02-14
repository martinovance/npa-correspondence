import { column, Company } from "@/types/tableTypes"

export const ManageCompanyColumns: column<Company>[] = [
  {
    label: "Company ID.",
    key: "companyId",
    sort: true,
    minWidth: 100,
  },
  {
    label: "Company Name",
    key: "companyName",
    minWidth: 150,
  },
  {
    label: "Contact Person",
    key: "contactPerson",
    minWidth: 150,
  },
  {
    label: "Email",
    key: "email",
    minWidth: 150,
  },
  {
    label: "Phone No",
    key: "phone",
    minWidth: 150,
  },
  {
    label: "Address",
    key: "address",
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

export const CompaniesData: Company[] = [
  {
    companyId: "AMD32451",
    companyName: "Bank of Industry",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Active",
  },
  {
    companyId: "AMD32451",
    companyName: "Federal Inland Revenue Service (FIRS)",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Inactive",
  },
  {
    companyId: "AMD32451",
    companyName: "Bank of Industry",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Active",
  },
  {
    companyId: "AMD32451",
    companyName: "Federal Inland Revenue Service (FIRS)",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Active",
  },
  {
    companyId: "AMD32451",
    companyName: "Bank of Industry",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Active",
  },
  {
    companyId: "AMD32451",
    companyName: "Federal Inland Revenue Service (FIRS)",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Inactive",
  },
  {
    companyId: "AMD32451",
    companyName: "Bank of Industry",
    contactPerson: "Mr. Lorem Ipsum",
    email: "michael.mitc@example.com",
    phone: "+23481234567",
    address: "Nigerian port Authority, Marina",
    status: "Active",
  },
]
