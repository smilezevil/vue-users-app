export interface UserName {
  title: string
  first: string
  last: string
}

export interface UserLocation {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
}

export interface UserDob {
  date: string
  age: number
}

export interface User {
  id: number
  gender: string
  name: UserName
  location: UserLocation
  email: string
  phone: string
  picture: string
  dob: UserDob
}
