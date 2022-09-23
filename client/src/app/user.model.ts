export interface UserModel{
    id?: string,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    role: {name:string},
    customer:{name:string},
    address: string,
    createdAt: string,
}

export interface patchUserModel{
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    address: string,
}

export interface customer{
    id: string,
    name: string
}
export interface role{
    id: string,
    name: string
}

export enum Role {
    SuperAdmin = "SuperAdmin",
    Admin = "Admin",
    Subscriber = "Subscriber"
}

export enum columnName{
    firstName = 'First Name', 
    middleName = 'Middle Name', 
    lastName= 'Last Name',
    email= 'Email',
    phoneNumber = 'Phone Number',
    address = 'Address',
    role= 'Role',
    customer = 'Customer',
    createdDate = 'User Created Date',
    edit = 'Edit'
  }