export interface Auth {
  username: string,
  password: string,
}
export interface DatosUser {
  id: string,
  userName: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: 'male' | 'female',
  token: string,

}
