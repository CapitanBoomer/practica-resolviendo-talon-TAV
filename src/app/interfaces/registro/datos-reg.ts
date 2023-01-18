export interface DatosReg {
  firstName: string,
  lastName: string,
  age: number,
  username: string,
  password: string,
  birthDate: string,
  gender: 'male' | 'female',

}
export interface IdusUario extends DatosReg {
  id: string;
}
