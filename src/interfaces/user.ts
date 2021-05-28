export interface Party {
  employeeId: string
  name: string
  partyId: string
  partyName: string
}
export interface User {
  account: string
  profile: string
  id: string
  name: string
  party: Party[]
}
