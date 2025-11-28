import { environment } from "../environment/environment";

export const AllApiEndPoints = {
login: `${environment.baseUrl}auth/auth/login`,

//---------------------- UNIVERSITY -----------------------------------
university: `${environment.baseUrl}univeristy`,

//---------------------- Users ----------------------------------------
addUsers :`${environment.baseUrl}auth/admin/signUp`,
getUsers :`${environment.baseUrl}user`
}